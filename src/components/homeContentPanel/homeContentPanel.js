import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

//Components
import { ContainerCurved } from "../../utilities/styledShared";
import styled from "styled-components";

//Redux
import { getAllText } from "../../redux/actions/text";
import { getCarousel } from "../../redux/actions/carousel"
import { connect } from "react-redux";

const ImageStyled = styled.img`
  float: right;
  padding-top:2%;
  `;

export class HomeContentPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  componentDidMount() {
    const { ...p } = this.props;
    p.getAllText();
    p.getCarousel();
  }

  onExiting = () => (this.animating = true);

  onExited = () => (this.animating = false);

  next = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.props.carousel.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.props.carousel.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = newIndex => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { ...p } = this.props;
    
    const carouselItems = p.carousel.map(item => ({
      id: item.id,
      image: item.image,
      heading: item.heading,
      description: item.description,
    }));
   
    const text = p.textCollection.map(textElement => ({
      key: textElement.id,
      data: textElement.pageData
    }));
    
    // const homeText = text.filter(x => x.key === 201).map(x => x.data);

    const { activeIndex } = this.state;
    
    const slides = carouselItems.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.id}
        >
          <img src={item.image} alt={item.description} />
          <CarouselCaption
            captionText={item.description}
            captionHeader={item.heading}
          />
        </CarouselItem>
      );
    });

console.log("Rendered!")

    return (
      <React.Fragment>
        <link
          href="https://fonts.googleapis.com/css?family=Poiret+One"
          rel="stylesheet"
        />
        <ContainerCurved>
          {/* <InfoPanelText>{homeText}</InfoPanelText> */}
          
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators
              items={carouselItems}
              activeIndex={activeIndex}
              onClickHandler={this.goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={this.previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={this.next}
            />
          </Carousel>
          
        </ContainerCurved>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  textCollection: state.text.allText, 
  carousel: state.carousel.carousel
});

const mapDispatchToProps = {
  getAllText,
  getCarousel,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContentPanel);
