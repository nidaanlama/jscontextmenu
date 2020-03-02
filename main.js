window.onclick = hideContextMenu;

var contextMenu = document.getElementById('contextMenu');

function menugoster (event) {
    contextMenu.style.display = 'block';
    contextMenu.style.left = event.clientX + 'px';
    contextMenu.style.top = event.clientY + 'px';
    return false;
}

function hideContextMenu () {
    contextMenu.style.display = 'none';
}
