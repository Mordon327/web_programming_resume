let bMinimized = false;

function collapse(sectionId) {
    bMinimized =! bMinimized;
    let edu = document.getElementById(`${sectionId}Content`);
    let stuff = document.getElementById(`${sectionId}`);
    if (bMinimized) {
    edu.setAttribute('style', 'display:none');
    } else {
    edu.setAttribute('style', 'display:block');
    }
}
