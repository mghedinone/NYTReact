import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Grades extends Component {
  state = {
    grades: [],
    name: "",
    teacher: "",
    grade: "",
    comments: ""
  };

  componentDidMount() {
    this.loadGrades();
  }

  loadGrades = () => {
    API.getGrades()
      .then(res =>
        this.setState({ grades: res.data, name: "", teacher: "", grade: "", comments: "" })
      )
      .catch(err => console.log(err));
  };

  deleteGrade = id => {
    API.deleteGrade(id)
      .then(res => this.loadGrades())
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
    if (this.state.name && this.state.teacher && this.state.grade) {
      API.saveGrade({
        name: this.state.name,
        teacher: this.state.teacher,
        grade: this.state.grade,
        comments: this.state.comments
      })
        .then(res => this.loadGrades())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Enter a grade:</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="student name (required)"
              />
              <Input
                value={this.state.teacher}
                onChange={this.handleInputChange}
                name="teacher"
                placeholder="teacher (required)"
              />
              <Input
                value={this.state.grade}
                onChange={this.handleInputChange}
                name="grade"
                placeholder="grade (required)"
              />
              <TextArea
                value={this.state.comments}
                onChange={this.handleInputChange}
                name="comments"
                placeholder="comments (Optional)"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.teacher && this.state.grade)}
                onClick={this.handleFormSubmit}
              >
                Submit Grade
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h1>Grades</h1>
            </Jumbotron>
            {this.state.grades.length ? (
              <List>
                {this.state.grades.map(grade => (
                  <ListItem key={grade._id}>
                    <Link to={"/grades/" + grade._id}>
                      <strong>
                        {grade.name}'s Grade in {grade.teacher}'s class is: {grade.grade}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteGrade(grade._id)} />
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

export default Grades;
