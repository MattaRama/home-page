export function wrapContainerPage(inner) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Directory Page</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
<div class="tile-container">
${inner}
</div>
</body>
</html>`;
}

export function generateTile(name, url, iconPath) {
  return `<a href="${url}" class="tile">
<img src="icons/${iconPath}" alt="${name}" />
<span>${name}</span>
</a>`;
}