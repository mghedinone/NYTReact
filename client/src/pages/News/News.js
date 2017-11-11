import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class News extends Component {
  state = {
    news: [],
    title: "",
    link: "",
    description: ""
  };

  componentDidMount() {
    this.loadNews();
  }

  loadNews = () => {
    API.getNews()
      .then(res =>
        this.setState({ news: res.data, title: "", link: "", description: ""})
      )
      .catch(err => console.log(err));
  };

  deleteNews = id => {
    API.deleteNews(id)
      .then(res => this.loadNews())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.link && this.state.description) {
      API.saveNews({
        title: this.state.title,
        link: this.state.link,
        description: this.state.description
        
      })
        .then(res => this.loadNews())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add A News Story</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="News Story Title (required)"
              />
              <Input
                value={this.state.link}
                onChange={this.handleInputChange}
                name="link"
                placeholder="Link To Story (required)"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description (Required)"
              />
              <FormBtn
                disabled={!(this.state.title && this.state.link && this.state.description)}
                onClick={this.handleFormSubmit}
              >
                Submit Story
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h1>Saved News Stories</h1>
            </Jumbotron>
            {this.state.news.length ? (
              <List>
                {this.state.news.map(news => (
                  <ListItem key={news._id}>
                    <Link to={"/news/" + news._id}>
                      <strong>
                        {news.title} {news.link}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteNews(news._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default News;
