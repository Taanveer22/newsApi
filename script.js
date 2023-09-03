const handleCatagory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();
    // console.log(data.data.news_category);

    // 1st:
    const tabContainer = document.getElementById('tab-container');

    const trimedData = data.data.news_category.slice(0,3);
    // 2nd:
    trimedData.forEach(category => {
        console.log(category);
        // 3rd:
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
                                  <a class="tab">${category.category_name}</a>
        `
        // 4th:
        tabContainer.appendChild(categoryDiv);
    });
        
}



handleCatagory();