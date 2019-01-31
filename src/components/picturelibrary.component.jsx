import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';


export default class pictureLibrary extends Component {
    constructor(props){
        super(props);
        this.state = {
            images: this.props.images
        };
    }

    setCustomTags (i) {
        return (
            i.tags.map((t) => {
                return (<div
                        key={t.value}
                        style={customTagStyle}>
                        {t.title}
                        </div>);
            })
        );
    }

    render () {
        var images =
                this.state.images.map((i) => {
                    i.customOverlay = (
                            <div style={captionStyle}>
                            <div>{i.caption}</div>
                            {i.hasOwnProperty('tags') &&
                             this.setCustomTags(i)}
                        </div>);
                    return i;
                });


        return (
                <div style={{
                    display: "block",
                    minHeight: "160px",
                    width: "100%",
                    border: "25px ridge #00BFFF",
                    overflow: "auto"}}>
                <Gallery
            images={images}
            enableImageSelection={false}/>
                </div>
        );
    }
}

pictureLibrary.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.string,
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired
        })
    ).isRequired
};

const captionStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    maxHeight: "240px",
    overflow: "hidden",
    position: "absolute",
    bottom: "0",
    width: "100%",
    color: "white",
    padding: "2px",
    fontSize: "90%"
};

const customTagStyle = {
    wordWrap: "break-word",
    display: "inline-block",
    backgroundColor: "lightblue",
    height: "auto",
    fontSize: "75%",
    fontWeight: "600",
    lineHeight: "1",
    padding: ".2em .6em .3em",
    borderRadius: ".25em",
    color: "black",
    verticalAlign: "baseline",
    margin: "1px"
};

pictureLibrary.defaultProps = {
    images: [
        {
            src: "https://github.com/Hextris/hextris/blob/gh-pages/images/twitter-opengraph.png?raw=true",
            thumbnail: "https://github.com/Hextris/hextris/raw/gh-pages/images/twitter-opengraph.png",
            thumbnailWidth: 320,
            thumbnailHeight: 160,
            tags: [{value: "Puzzle", title: "Hextris"}],
            caption: "An addictive puzzle game inspired by Tetris"
        },
        {
            src: "https://camo.githubusercontent.com/fcccdd4ab52e10be669d69d10a3180b212edb352/687474703a2f2f692e696d6775722e636f6d2f536c62767436352e706e67",
            thumbnail: "https://camo.githubusercontent.com/fcccdd4ab52e10be669d69d10a3180b212edb352/687474703a2f2f692e696d6775722e636f6d2f536c62767436352e706e67",
            thumbnailWidth: 320,
            thumbnailHeight: 160,
            tags: [{value: "Annoying", title: "Clumsy Bird"}],
            caption: "A MelonJS made Flappy Bird clone"
        },
        {
            src: "https://camo.githubusercontent.com/6179d979500996ba83344bc5d1ec47c0e47b5985/687474703a2f2f646176652d616e642d6d696b652e6769746875622e636f6d2f67616d652d6f66662d323031322f696d672f73706c6173682d73637265656e2e706e67",
            thumbnail: "https://camo.githubusercontent.com/6179d979500996ba83344bc5d1ec47c0e47b5985/687474703a2f2f646176652d616e642d6d696b652e6769746875622e636f6d2f67616d652d6f66662d323031322f696d672f73706c6173682d73637265656e2e706e67",
            thumbnailWidth: 320,
            thumbnailHeight: 160,
            tags: [{value: "Adventure", title: "Alge's Escapade"}],
            caption: "Alge has been trapped in Area 51! Help him escape by moving him through the levels to the escape tube at the end. Clone your way top victory by turning the correct combination of switches on to turn off the lasers and escape to freedom."
        },
        {
            src: "https://raw.githubusercontent.com/CamHenlin/ExecutiveMan/master/images/screenshot.png",
            thumbnail: "https://raw.githubusercontent.com/CamHenlin/ExecutiveMan/master/images/execmanlogobig.png",
            thumbnailWidth: 320,
            thumbnailHeight: 140,
            tags: [{value: "Arcade", title: "Executive Man"}],
            caption: "A clone of Megaman written in JavaScript. The ExecutiveMan engine aims to have 100% complete feature coverage of the original MegaMan games. The only thing that is missing at this point is ladders, for one very simple reason: Ladders require extra up and down buttons which make the game very clumsy to play with touch controls."
        },
        {
            src: "https://camo.githubusercontent.com/8173e3b9e39d0554df07b70b271131ddcbf39f58/687474703a2f2f692e696d6775722e636f6d2f69357271342e706e67",
            thumbnail: "https://camo.githubusercontent.com/e70dedac4f2d51b80440015fc0ebc6ba5a672c5f/68747470733a2f2f7261772e6769746875622e636f6d2f70657461726f762f67616d652d6f66662d323031322f6d61737465722f6172742f6c6f676f2d636c722e706e67",
            thumbnailWidth: 320,
            thumbnailHeight: 160,
            tags: [{value: "Farming", title: "Raging Gardens"}],
            caption: "Collect as many carrots as possible in 3 minutes. Use the controls to move and repel opponents."
        },
        {
            src: "https://camo.githubusercontent.com/eaede619c56d3d0998dca00b8c540f39df7fd8fa/687474703a2f2f692e696d6775722e636f6d2f396b4d567465372e706e67",
            thumbnail: "https://steamcdn-a.akamaihd.net/steam/apps/10/header.jpg?t=1528733245",
            thumbnailWidth: 320,
            thumbnailHeight: 160,
            tags: [{value: "First Person Shooter", title: "Counter-Strike JS"}],
            caption: "Counter-Strike 1.6 implementation in TypeScript utilizing state of the art browser APIs."
        },
        {
            src: "https://i.ytimg.com/vi/0BD0myegQlE/hqdefault.jpg",
            thumbnail: "https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fblogs-images.forbes.com%2Folliebarder%2Ffiles%2F2018%2F03%2Fsuper_mario_plumber_new-1200x675.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 160,
            tags: [{value: "Adventure"}],
            tags: [{value: "Classic | Adventure", title: "Mario JS"}],
            caption: "This is a clone of Infinite Mario, written in JavaScript for web browsers using HTML5."
        }
    ]
};
