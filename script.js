// first function

const handleCatagory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();
    // console.log(data);
    // console.log(data.data.news_category);

    // 1st:
    const tabContainer = document.getElementById('tab-container');

    // 2nd:
    const trimedData = data.data.news_category.slice(0, 3);
    // console.log(trimedData);
    
    trimedData.forEach(category => {
    // console.log(category);
        // 3rd:
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
                                  <a onclick="handleLoadNews('${category.category_id}')" class="tab">${category.category_name}</a>
        `
        // 4th:
        tabContainer.appendChild(categoryDiv);
    });
        
};


// second function

const handleLoadNews = async (categoryId) => {
    // console.log(categoryId);
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
    const data = await response.json();
    // console.log(data);

    // 1st:
  const cardContainer = document.getElementById('card-container');
    // for removing previous loaded data
  cardContainer.innerHTML = "";

    // 2nd:
    const cardData = data.data;
    // console.log(cardData);
    cardData?.forEach((news) => {
        // console.log(news);
      
        // 3rd:
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML = `

                <div class="card w-96 bg-base-100 shadow-xl">

                    <figure>
                      <img
                        src=${news?.image_url}
                      />
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">
                        ${news.title.slice(0,20)}
                        <div class="badge badge-secondary p-5">${news.rating.badge}</div>
                      </h2>
                      <p>
                        ${news?.details.slice(0,60)}
                      </p>
                      <div class="card-footer flex justify-between mt-8">
                        <div class="flex">
                          <div>
                            <div class="avatar online">
                              <div class="w-14 rounded-full">
                                <img
                                  src= ${news?.author.img}
                                />
                              </div>
                            </div>
                          </div>
                          <div>
                            <h6>${news?.author.name}</h6>
                            <small>${news?.author.published_date}</small>
                          </div>
                        </div>
                        <div class="card-detaild-btn">
                          <button
                            class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
                          >
                            Details
                          </button>
                        </div>
                      </div>
                    </div>
            </div> 
        `
        // 4th:
        cardContainer.appendChild(cardDiv);

    })
   

}



handleCatagory();
// for default homepage loaded value
handleLoadNews('01');