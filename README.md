# React Portfolio, multiple pages with dark mode

<p>
    For my first portfolio I used template created with &hearts; by
    <a href='https://paytonpierce.dev'>Payton Pierce</a>
</p>


<img width="1529" alt="Screen Shot 2023-01-17 at 11 26 05 PM" src="https://user-images.githubusercontent.com/81769855/213099941-47466c53-e2d5-457e-b21e-f4ecb68de638.png">

Even by using a template I have learned more about react router, creating favicons, and deploying to github pages. Since the app was created by create-react-app, index.html was in /public directory, but gh pages were looking for one in the root directory. Using gh-pages npm package and adding deploy scripts helped solve this issue. Gh-pages creates another branch with the same name and different folder structure and we deploy from that branch.

Next issue was that react router wasn't working well with gh pages. When deployed, the app would allow to navigate back, but would show 404 under the same URL. I used hashrouter from react-router-dom instead of router in App.js. It literally adds a hash in the route and all navigation and history work! According to the docs is should only be used when absolutely necessary.

The third deployment issue was that favicon.ico was not rendered. When I check the requests in dev tools, it showed 404 and the path to it was /favicon.ico. That would be correct on localhost, running code from the main branch. But remember, that we are deploying from our build folder. It had the favicon in the root.
In the requests tab I've inspected how other static resources were requested and discovered that their path started with /portfolio/. After I've change the path to favicon to /portfolio/favicon.ico - it worked! :raised_hands:

Live site: https://juliasut.github.io/portfolio/
