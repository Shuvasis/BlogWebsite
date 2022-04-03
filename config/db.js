const mongoose = require('mongoose');
module.exports = connect = async () => {
	try {
		const response = await mongoose.connect('mongodb+srv://user:i0milDmf8yyHB2wO@blogweb.qhbtq.mongodb.net/BLOG?retryWrites=true&w=majority');
		console.log('Database Connection Succesful');
	} catch (error) {
		console.log(error);
	}
};
