# magicalGirlBoutique
*** PROJECT INSTRUCTIONS ***

A) Installations and launching

	1) Right click on the folder of the project and select "open in terminal" (Windows 11).
	2) Type "cd magicalgirlboutique" and hit enter to redirect to the folder inside. 
	3) Type "npm install" and hit enter to make necessary installations.
	4) Type "code ." to open VS Code.
	5) Type "ng serve --o" and hit enter to open the project page in the default browser. 
	
B) Navigating in the page

	1) Login page
		- First thing you will see upon opening the page is the login section.
		- You can navigate to 2), register a user and then return to login.
		- Then click login to be redirected to the shop.
	   
	2) Register page
		- You can also register a new user via clicking the underlined "here" under the login button to go to the register page.
		- For registration it has username and password only. Then hit the register button and you will be redirected to the login page. 
	   
	3) Main page (e-shop) with navbar
		- When in the shop page there is a navbar with 4 tabs named Index, Shop, About and Contact. There is also a logout button.
		- The index has a slideshow.
		- The shop includes 2 columns, one with the shop and one with the cart. You can hover over the products to see their full picture.
			~ You can also click "Add to Cart" to put and item to the cart and click "Remove Item" from the cart to remove it.
			~ There is a search bar with a search button next to it above the shop column. Try searching for keywords that are in the title
				or description of the products, such as "blue" or "box" and click "Search" to see the equivalent products.
		- The about page has the creators. You can click "Show More" or "Show Less" (it's the same button) to show or hide their description.
		- The contact page includes a contact form where the user can send a message to the page. 
		- Finally, you can click "Logout" to be redirected back to the login page. 
		
C) Code inside the VS Code environment

	1) Components
		- There are 3 main components: the login, register and main page. 
		- The main page has 4 subcomponents: the index, shop, about and contact page.
		- The shop subcomponenent has the cart component inside. 
		- The edited aspects of the components are the html and ts parts.
		
	2) Classes
		- There are 3 classes: the products, users and creators.
		
	3) Services
		- There are two services generated: the AuthService and the FirebaseService. The AuthService is used most for fetching and updating data.
	
	4) App component 
		- The app component is used for routing between pages and components. 
		
	5) Extra features
		- The login component has "Cookie" implemented. When a user is logged in, their id is kept as cookie information. 
			For me this can be seen using the Cookie-Editor add-on on Firefox.
		- When logout button is pressed, the cookie information gets deleted. 
		
D) Firebase console
 
	- The data for the users, products and creators comes from a custom JSON file that is stored in firebase. 
	- The data on firebase can be changed for the users when a new user is registered. 
