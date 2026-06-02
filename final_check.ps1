#!/usr/bin/env pwsh

# Get all gallery files
$files = @(Get-ChildItem -Path 'C:\code\skepticus-info\public\gallery' -Filter '*.png' | Sort-Object Name)

# Parse gallery.ts for all locations
$galleryContent = Get-Content 'C:\code\skepticus-info\src\data\gallery.ts' -Raw

# Extract all unique location file names manually
$locationPattern = "location:\s*'/gallery/([^']+)'"
$matches = [regex]::Matches($galleryContent, $locationPattern)
$locations = @()
foreach ($match in $matches) {
    $locations += $match.Groups[1].Value
}

Write-Host "Total files: $($files.Count)"
Write-Host "Total entries: $($locations.Count)"
Write-Host ""

# Find missing files
$missing = @()
foreach ($file in $files) {
    # Normalize for comparison (handle escaped quotes)
    $fileNormalized = $file.Replace("'", "\'")
    if ($locations -notcontains $file -and $locations -notcontains $fileNormalized) {
        $missing += $file
    }
}

if ($missing.Count -gt 0) {
    Write-Host "MISSING ENTRIES ($($missing.Count)):"
    $missing | ForEach-Object { Write-Host "  $_" }
} else {
    Write-Host "SUCCESS: All files have entries!"
    Write-Host "Files = Entries ($($files.Count) = $($locations.Count))"
}
