document.addEventListener('DOMContentLoaded', () => {
    const displayArea = document.getElementById('content');

    // Create and add a title
    const title = document.createElement('h2');
    title.textContent = 'City Sorter';
    displayArea.appendChild(title);

    // Create the button to trigger sorting
    const button = document.createElement('button');
    button.textContent = 'Sort Cities Alphabetically';
    displayArea.appendChild(button);

    // Initial list of cities
    const cities = ["Tokyo", "Paris", "New York", "Berlin", "Sydney", "Mumbai"];

    // Create a list to display cities
    const cityList = document.createElement('ul');
    cities.forEach(city => {
        const listItem = document.createElement('li');
        listItem.textContent = city;
        cityList.appendChild(listItem);
    });
    displayArea.appendChild(cityList);

    // Message to display after sorting
    const message = document.createElement('p');
    message.style.fontStyle = 'italic';
    displayArea.appendChild(message);

    // Add event listener to the button for sorting cities
    button.addEventListener('click', () => {
        // Sort cities alphabetically
        cities.sort();

        // Clear the existing list
        cityList.innerHTML = '';

        // Display sorted cities
        cities.forEach(city => {
            const listItem = document.createElement('li');
            listItem.textContent = city;
            cityList.appendChild(listItem);
        });

        // Display sorted message
        message.textContent = 'The cities have been sorted alphabetically!';
    });
});

