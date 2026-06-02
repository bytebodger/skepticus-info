#!/usr/bin/env pwsh

# Count files
$files = @(Get-ChildItem -Path 'C:\code\skepticus-info\public\gallery' -Filter '*.png')
$fileCount = $files.Count

# Count entries
$content = [System.IO.File]::ReadAllText('C:\code\skepticus-info\src\data\gallery.ts')
$titleMatches = [regex]::Matches($content, "title:\s*'[^']*'")
$entryCount = $titleMatches.Count

Write-Output "Files: $fileCount"
Write-Output "Entries: $entryCount"
Write-Output "Match: $(if ($fileCount -eq $entryCount) { 'YES' } else { 'NO' })"
