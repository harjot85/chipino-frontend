import React, { Component } from "react";
import { Row, Col, CardHeader, CardLink, CardText, CardBody } from "reactstrap";

//Redux
import { getAllPublicRepos } from "../../redux/actions/github";
import { connect } from "react-redux";

//Custom Components
import {
  ProjectCard,
  Carousel,
  SliderButton,
  TechBadge,
  TechBadgeHolder
} from "./styles";

import { getElementsPerScreen } from"../../utilities/functions";

export class ProjectSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: 3
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
    var showCards;
    showCards = getElementsPerScreen();
    this.setState({ cards: showCards });
  };

  changeActiveItem = activeItemIndex => this.setState({ activeItemIndex });

  render() {
    const { activeItemIndex } = this.state;
    const { ...p } = this.props;
    const rs = p.repoCollection;

    return (
      <>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <Carousel
          numberOfCards={this.state.cards}
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
                <Col sm="12" lg="2" md="4" style={{ textAlign: "center" }}>
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
                          <b>Desc: </b>
                          {item.description}
                        </CardText>
                      </CardBody>
                      <TechBadgeHolder>
                        {repoTech !== "Not Specified" && (
                          <h5>
                            <TechBadge color="info">{repoTech}</TechBadge>
                          </h5>
                        )}
                      </TechBadgeHolder>
                    </CardLink>
                  </ProjectCard>
                </Col>
              </Row>
            );
          })}
        </Carousel>
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
)(ProjectSlider);
