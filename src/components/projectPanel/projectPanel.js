import React, { Component } from "react";
import { Row } from "reactstrap";
import { Card, CardLink, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import { ContainerCurved } from '../../utilities/styledShared';

//Redux
import { getAllPublicRepos } from "../../redux/actions/github";
import { connect } from "react-redux";

export class ContentPanel extends Component {
  
  componentDidMount() {
    
    const { ...p } = this.props;
    p.getAllPublicRepos();
  }
  
  render() {
    const { ...p } = this.props;
    const rs = p.repoCollection;
    
    return (
      <React.Fragment>
        <ContainerCurved height="fit-content">
          <div style={{float: 'right', padding: '1%', width: '70%', height:'100%' }}>
            <Row style={{ textAlign: "right" }}><h1>Button can go here ! </h1></Row>
            <Row style={{ textAlign: "right" }}>
              {rs.map((item, index) =>{
                let repoTech = item.language == null ? "Not Specified" : item.language; 
                return(
                  <Card key={index} style={{
                    display: "inline-block",
                    height: "235px",
                    width: "200px",
                    backgroundColor: "pink",
                    margin: "10px",
                    padding: "6px",
                    boxShadow: '0 2px 3px white'
                  }}>
                    <CardBody>
                      <p><b>Id:</b> {item.id}</p>
                      <CardTitle><b>Name:</b> {item.name}</CardTitle>
                      <CardSubtitle><b>Full Name:</b> {item.full_name}</CardSubtitle>
                    </CardBody>
                    <CardBody>
                      <CardText><b>Technology: </b>{repoTech}</CardText>
                      <CardText><b>Desc: </b>{item.description}</CardText>
                      <CardText><b>Default Branch: </b>{item.default_branch}</CardText>
                      <CardLink href={item.html_url}><b>URL: </b>{item.name}</CardLink><br/>
                      <CardLink href={item.git_url}><b>GIT URL: </b>{item.name}</CardLink>
                    </CardBody>
                  </Card>       
                )
              })}
            </Row>
            </div>
        </ContainerCurved>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  repoCollection: state.github.repos
});

const mapDispatchToProps = {
  getAllPublicRepos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentPanel);
