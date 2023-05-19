import webPush from 'web-push';
export const GCM_API_KEY = 'AIzaSyBBh4ddPa96rQQNxqiq_qQj7sq1JdsNQUQ';
export const APPLICATION_KEYS = {
	publicKey: 'BDd3_hVL9fZi9Ybo2UUzA284WG5FZR30_95YeZJsiA' +
		'pwXKpNcF1rRPF3foIiBHXRdJI2Qhumhf6_LFTeZaNndIo',
	privateKey: 'xKZKYRNdFFn8iQIF2MH54KTfUHwH105zBdzMR7SI3xI',
};


webPush.setGCMAPIKey(GCM_API_KEY);
webPush.setVapidDetails(
	'mailto:example@yourdomain.org',
	APPLICATION_KEYS.publicKey,
	APPLICATION_KEYS.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const rdshoepIosDevice = {
	"endpoint": "https://web.push.apple.com/QHjsf3RL4pnqS5DBq9OKWNhPGs-zydTLLeOz_6eI_MEFs4d0jpP3ls_jsEm40RogH5cZprw4jy6xg9lw1kKQD6aLvUlsvUCK93bc68kb4Xd7a7lBNFQCoLr5YCa_LwcOspNM1ZlFvNrJbvJx1v5y7g6eLxq-TU8BsS_4wrmgTJ0",
	"keys": {
		"p256dh": "BPzdNuJ_J-FmzTrn7NE2tiU9bRaPkqutjOVeMjQisEqXmcFgzXyZ5vkRJ7B-OKLQZvvoyMIKI7X-_85f2vNnEp8",
		"auth": "fyDRnAyhDHQK0WLUS5tnpw"
	}
};

webPush.sendNotification(rdshoepIosDevice, 'webPush from script');
