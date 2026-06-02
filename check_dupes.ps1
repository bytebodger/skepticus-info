#!/usr/bin/env pwsh

$content = Get-Content 'C:\code\skepticus-info\src\data\gallery.ts' -Raw
$matches = [regex]::Matches($content, "location:\s*'/gallery/([^']*(?:\\'[^']*)*)'")
$locations = @()
$matches | ForEach-Object { $locations += $_.Groups[1].Value }

# Find duplicates
$grouped = $locations | Group-Object
$duplicates = $grouped | Where-Object { $_.Count -gt 1 }

if ($duplicates) {
    Write-Host "Duplicates found:"
    $duplicates | ForEach-Object {
        Write-Host "$($_.Name): $($_.Count) times"
    }
} else {
    Write-Host "No duplicates found"
}

Write-Host "Total entries: $($locations.Count)"
