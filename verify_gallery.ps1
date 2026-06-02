#!/usr/bin/env pwsh

# Get all gallery file names
$galleryFiles = Get-ChildItem -Path 'C:\code\skepticus-info\public\gallery' -Filter '*.png' | Select-Object -ExpandProperty Name | Sort-Object

# Extract all location paths from gallery.ts - improved regex to handle escaped quotes
$galleryPath = 'C:\code\skepticus-info\src\data\gallery.ts'
$content = Get-Content $galleryPath -Raw
# Match both normal quotes and escaped quotes in the path
$locations = [regex]::Matches($content, "location:\s*'/gallery/([^']*(?:\\'[^']*)*)'") | ForEach-Object { $_.Groups[1].Value }

Write-Host "Total files in gallery directory: $($galleryFiles.Count)"
Write-Host "Total entries in gallery.ts: $($locations.Count)"
Write-Host ""

# Normalize locations by removing escaping for comparison
$normalizedLocations = $locations | ForEach-Object { $_ -replace "\\'", "'" }

# Find missing files
$missing = @()
foreach ($file in $galleryFiles) {
    if ($normalizedLocations -notcontains $file) {
        $missing += $file
    }
}

if ($missing.Count -gt 0) {
    Write-Host "Missing entries ($($missing.Count)):"
    $missing | ForEach-Object { Write-Host "  $_" }
    Write-Host ""

    # Generate entries for missing files
    Write-Host "Generating entries for missing files:"
    Write-Host ""

    foreach ($file in $missing) {
        # Remove .png extension
        $nameWithoutExt = $file -replace '\.png$', ''

        # Replace hyphens and spaces with spaces, then title case each word
        $cleanedName = $nameWithoutExt -replace '[_-]', ' '
        $words = $cleanedName -split '\s+'
        $titleWords = @()

        foreach ($word in $words) {
            # Skip "wide" at the end (case insensitive)
            if ($word -eq 'wide') {
                continue
            }

            # Title case the word (preserve apostrophes)
            if ($word -match "'") {
                # Handle contractions like "god's"
                $titleWord = $word.Substring(0, 1).ToUpper() + $word.Substring(1).ToLower()
            } else {
                $titleWord = $word.Substring(0, 1).ToUpper() + $word.Substring(1).ToLower()
            }
            $titleWords += $titleWord
        }

        $title = $titleWords -join ' '
        Write-Host "    {"
        Write-Host "        title: '$($title)',"
        Write-Host "        location: '/gallery/$file',"
        Write-Host "    },"
    }
} else {
    Write-Host "All files have entries!"
}
