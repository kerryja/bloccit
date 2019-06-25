const sequelize = require("../../src/db/models/index").sequelize;
const Topic = require("../../src/db/models").Topic;
const Post = require("../../src/db/models").Post;

describe("POST", () => {
  beforeEach(done => {
    this.topic;
    this.post;
    sequelize.sync({ force: true }).then(res => {
      Topic.create({
        title: "Expeditions to Alpha Centauri",
        description:
          "A compilation of reports from recent visits to the star system."
      })
        .then(topic => {
          this.topic = topic;

          Post.create({
            title: "Chinchillas",
            body: "The best chew toys for your chins",
            topicId: this.topic.id
          }).then(post => {
            this.post = post;
            done();
          });
        })
        .catch(err => {
          console.log(err);
          done();
        });
    });
  });

  describe("#create()", () => {
    it("should create a topic object with a title and description", done => {
      Topic.create({
        title: "Chinchillas",
        description: "The best chew toys for your chins"
      }).then(topic => {
        expect(topic.title).toBe("Chinchillas");
        expect(topic.description).toBe(
          "The best chew toys for your chins"
        );
        done();
      });
    });
    it("should create a topic with a corresponding title post", done => {
      Topic.create({
        title: "Chinchillas",
        description: "The best chew toys for your chins"
      })
        .then(topic => {
          done();
        })
        .catch(err => {
          expect(err.message).toContain("Topic.title cannot be null");
          expect(err.message).toContain("Topic.description cannot be null");
          done();
        });
    });
  });

  describe("#getPosts()", () => {
    it("should return the associated posts", done => {
        expect(this.post.title).toBe("Chinchillas");
        done();
   });
 });
});