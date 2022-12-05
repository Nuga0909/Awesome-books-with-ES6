const pageViews = () => {
    const listMenu = document.querySelector('.list');
    const addMenu = document.querySelector('.add-new');
    const contactMenu = document.querySelector('.see-contact');

    listMenu.addEventListener('click', () => {
    document.querySelector('.list').style.textDecoration = 'underline';
    document.querySelector('.booksdata').style.display = 'block';
    document.querySelector('.addbooks').style.display = 'none';
    document.querySelector('.contact').style.display = 'none';
    document.querySelector('.add-new').style.textDecoration = 'none';
    document.querySelector('.see-contact').style.textDecoration = 'none';
    // popup.style.display = 'none';
    });
    addMenu.addEventListener('click', () => {
    document.querySelector('.add-new').style.textDecoration = 'underline';
    document.querySelector('.booksdata').style.display = 'none';
    document.querySelector('.addbooks').style.display = 'block';
    document.querySelector('.contact').style.display = 'none';
    document.querySelector('.see-contact').style.textDecoration = 'none';
    document.querySelector('.list').style.textDecoration = 'none';
    // popup.style.display = 'none';
    });

    contactMenu.addEventListener('click', () => {
    document.querySelector('.see-contact').style.textDecoration = 'underline';
    document.querySelector('.booksdata').style.display = 'none';
    document.querySelector('.addbooks').style.display = 'none';
    document.querySelector('.contact').style.display = 'block';
    document.querySelector('.add-new').style.textDecoration = 'none';
    document.querySelector('.list').style.textDecoration = 'none';
    // popup.style.display = 'none';
    });
};

export default { pageViews };