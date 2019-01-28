## TODO
1) Fork the libraries which are not maintained to stay updated with security fixes.
	1) `surge` https://github.com/sintaxi/surge
2) Use `dotenv`
	1) Manager environment variables using `dotenv` https://github.com/motdotla/dotenv.
	2) Use `NODE_ENV` for differentiating between `development` and `production`.
	3) Upgrade `build` script if necessary.
	4) Upgrade `start` script to handle the entire server and create a separate script for frontend server.
3) Hot Module Replacement (HMR)
	1) Research the possibility of hot reloading entry point (`src/index.js`) by implementing HMR interface.
	2) If above is possible, research the benefits of `hotOnly: true,  // No-Reload, only HMR`
