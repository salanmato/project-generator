
categories = [{
    name: 'Front-end', description: 'Front-end development',
    subCategories: ['Generative Art', 'Interactive Art', 'Generative Pattern Wallpaper', 'Photo Filter']
}, {
    name: 'UI Design', description: 'UI Design projects',
    subCategories: ['Landing Page', 'Dashboard', 'E-commerce']
}, {
    name: 'Graphic Design', description: 'Graphic Design projects',
    subCategories: ['Logo Design', 'Business Card', 'Flyer', 'Mini-Kit de Identidade Visual', 'Poster', 'Infographic', 'Social Media Post', 'Book Cover', 'T-shirt Design']
}, {
    name: 'Motion Graphics', description: 'Motion Graphics projects',
    subCategories: ['Opening Animation for a TV Show', 'Animated Logo', 'Animated Infographic', 'Opening Animation for a Youtube Channel']
}, {
    name: 'Games', description: 'Game Development projects',
    subCategories: ['Design a HUD', 'Design a Menu', 'Design a game logo', 'Design a game character', 'Design a game environment', 'Design a game level']
}]

topics = ['sports', 'technology', 'health', 'education', 'entertainment', 'business', 'lifestyle', 'travel', 'food', 'fashion', 'logistics', 'finance', 'automotive', 'real estate', 'gaming', 'music', 'art', 'photography', 'writing', 'science', 'history']

themes = ['dark', 'light', 'colorful', 'minimalistic', 'retro', 'futuristic', 'elegant', 'playful', 'professional', 'vintage']

buttonGenerate = document.querySelector('#generate');
buttonReset = document.querySelector('#reset');
categoryText = document.querySelector('#category');
subcategoryText = document.querySelector('#sub-category');
topicText = document.querySelector('#topic');
themeText = document.querySelector('#theme');

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}



buttonGenerate.addEventListener('click', () => {
    document.querySelector('#topic-container').style.display = 'block';
    document.querySelector('#theme-container').style.display = 'block';
    selectedCategory = getRandomElement(categories);
    categoryText.textContent = selectedCategory.name;
    subcategoryText.textContent = getRandomElement(selectedCategory.subCategories);
    if (selectedCategory.name !== 'Front-end') {
        topicText.textContent = getRandomElement(topics);
        themeText.textContent = getRandomElement(themes);
    } else {
        document.querySelector('#topic-container').style.display = 'none';
        document.querySelector('#theme-container').style.display = 'none';
    }
})

buttonReset.addEventListener('click', () => {
    categoryText.textContent = '';
    subcategoryText.textContent = '';
    topicText.textContent = '';
    themeText.textContent = '';

})