const Topic = require("./models").Topic;

module.exports = {

	getAllTopics(callback) {
		return Topic.findAll() //Model.all has been deprecated

			.then((topics) => {
				callback(null, topics);
			})
			.catch((err) => {
				callback(err);
			})
	},
	addTopic(newTopic, callback) {
		return Topic.create({
			title: newTopic.title,
			description: newTopic.description
		})
			.then((topic) => {
				callback(null, topic);
			})
			.catch((err) => {
				callback(err);
			})
	},
	getTopic(id, callback) {
		return Topic.findByPk(id) //findById has been deprecated
			.then((topic) => {
				callback(null, topic);
			})
			.catch((err) => {
				callback(err);
			})
	},
	deleteTopic(id, callback) {
		return Topic.destroy({
			where: { id }
		})
			.then((topic) => {
				callback(null, topic);
			})
			.catch((err) => {
				callback(err);
			})
	},
	updateTopic(id, updatedTopic, callback) {
		return Topic.findByPk(id) //findById has been deprecated
			.then((topic) => {
				if (!topic) {
					return callback("Topic not found");
				}

				topic.update(updatedTopic, {
					fields: Object.keys(updatedTopic) //issue
				})
					.then(() => {
						callback(null, topic);
					})
					.catch((err) => {
						callback(err);
					});
			});
	}
}	