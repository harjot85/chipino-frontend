import React, { Component } from "react";
import {
  Row,
  Col,
  Badge,
  Card,
  CardHeader,
  CardLink,
  CardText,
  CardBody,
  Button
} from "reactstrap";

import styled from "styled-components";
import ItemsCarousel from "react-items-carousel";

//Redux
import { getAllPublicRepos } from "../../redux/actions/github";
import { connect } from "react-redux";

const ProjectCard = styled(Card)`
  display: inline-block;
  height: 300px;
  width: 240px;
  background-color: white;
  margin: 10px;
  padding-bottom: 25px;
  position: relative;
`;

const TechBadge = styled(Badge)`
  padding: 6px;
  margin-left: 6px;
  box-shadow: 0 0 3px #07c;
`;

const SliderButton = styled(Button)`
  &&& {
    border-radius: 50%;
  }
`;

export class ProjectCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false
    };
  }

  componentWillMount() {
    this.setState({
      activeItemIndex: 0
    });
  }

  componentDidMount() {
    const { ...p } = this.props;
    p.getAllPublicRepos();
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate = () => {
    this.setState({ isDesktop: window.innerWidth > 1450 });
  };

  changeActiveItem = activeItemIndex => this.setState({ activeItemIndex });

  render() {
    const isDesktop = this.state.isDesktop;
    const { activeItemIndex } = this.state;

    const { ...p } = this.props;
    const rs = p.repoCollection;

    return (
      <>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <ItemsCarousel
          style={{ paddingLeft: "5%", paddingRight: "5%" }}
          numberOfCards={isDesktop ? 5 : 3}
          gutter={12}
          showSlither={false}
          firstAndLastGutter={false}
          freeScrolling={false}
          requestToChangeActive={this.changeActiveItem}
          activeItemIndex={activeItemIndex}
          activePosition={"center"}
          chevronWidth={99}
          rightChevron={
            <SliderButton outline color="info" size="lg">
              {">"}
            </SliderButton>
          }
          leftChevron={
            <SliderButton outline color="info" size="lg">
              {"<"}
            </SliderButton>
          }
          outsideChevron={false}
        >
          {rs.map((item, index) => {
            let repoTech =
              item.language == null ? "Not Specified" : item.language;
            return (
              <Row>
                <Col sm="12" lg="2" md="4" style={{}}>
                  <ProjectCard key={index}>
                    <CardLink href={item.html_url} style={{ color: "#202A2E" }}>
                      <CardHeader>
                        <strong>{item.name}</strong>
                      </CardHeader>
                      <CardBody>
                        <CardText>
                          <b>Id:</b> {item.id}
                        </CardText>
                        <CardText>
                          <b>Desc:</b>
                          {item.description}
                        </CardText>
                      </CardBody>
                      <div
                        style={{
                          bottom: "3px",
                          height: "30px",
                          position: "absolute"
                        }}
                      >
                        {repoTech !== "Not Specified" && (
                          <TechBadge color="info">{repoTech}</TechBadge>
                        )}
                      </div>
                    </CardLink>
                  </ProjectCard>
                </Col>
              </Row>
            );
          })}
        </ItemsCarousel>
      </>
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
)(ProjectCollection);
