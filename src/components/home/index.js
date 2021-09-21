import React, { Component } from "react";
import { GetAll,GetById, GetNewProduct,GetNewProductById } from "../apis/prodapi";
import { addToCart } from "../store/actions/actions";
import { connect } from "react-redux";
import {Section,Signup,SpanIiconBottom,CarouselCaption,CarouselCaptionH,CarouselCaptionP,
CarouselItem,CarsCont,CarsContainer,CarouselImg,ButtonsLink,BottomI,Newest,SectionSlider,Slider,
Product,ProductCardBody,ProductImg,ProductSlider,Left,Right,BtnAdd,Btns
,CardImgCont,CardText,Title,BtnShow} from './styled.js'
class Home extends Component{

    state ={
        products:[],
        newproducts:[],
        product:{}
    }

    componentDidMount(){
        GetAll().then(data =>{
            this.setState({products:data})
        })

        GetNewProduct().then(data =>{
            this.setState({newproducts:data})
        })
    }

    changeId=(id)=>{
        GetNewProductById(id).then(product =>{
            this.setState({product})
        })
    }
    changeMobileId=(id)=>{
        GetById(id).then(product =>{
            this.setState({product})
        })
    }

    AddProdectToCart=()=>{
        this.props.addToCart(this.state.product,1)
    }



    nextSlid=()=>{
        let secScroll = document.querySelector(".section");
        let srcolling = document.querySelector(".product").clientWidth;

        secScroll.scroll({
            left:secScroll.scrollLeft + (srcolling + 15),
            behavior:"smooth"
        })
        
    }
    prevSlid=()=>{
        let secScroll = document.querySelector(".section");
        let srcolling = document.querySelector(".product").clientWidth;

        secScroll.scroll({
            left:secScroll.scrollLeft - (srcolling + 15),
            behavior:"smooth"
        })
    }
    nextProdSlid=()=>{
        let secScroll = document.querySelector(".section.all-product");
        let srcolling = document.querySelector(".product").clientWidth;

        secScroll.scroll({
            left:secScroll.scrollLeft + (srcolling + 15),
            behavior:"smooth"
        })
        
    }
    prevProdSlid=()=>{
        let secScroll = document.querySelector(".section.all-product");
        let srcolling = document.querySelector(".product").clientWidth;

        secScroll.scroll({
            left:secScroll.scrollLeft - (srcolling + 15),
            behavior:"smooth"
        })
    }

    render(){
        return (
            <Section>
                <CarsCont>
                    <CarsContainer className="container">
                        <CarouselCaption>
                            <CarouselCaptionH>buy best products from <br/> all of the world </CarouselCaptionH>
                            <CarouselCaptionP>
                                Some representative placeholder content for the first slide 
                                Some representative placeholder content for the first slide
                            </CarouselCaptionP>
                            <div className="buttons">
                                <ButtonsLink to="/productes">Products</ButtonsLink>
                                <Signup className="signup" to="/productes">Signup</Signup>
                            </div>
                        </CarouselCaption>
                        <CarouselItem>
                            <CarouselImg src={`/imge/phone.png`} alt="..." />
                        </CarouselItem>
                    </CarsContainer>
                    <SpanIiconBottom>
                        <BottomI className="fa fa-angle-down"></BottomI>
                    </SpanIiconBottom>
                </CarsCont>

                <Slider className="container">
                    <ProductSlider>
                    <Newest>Newest Products</Newest>
                    <Left onClick={()=>this.prevSlid()} ><i className="fa fa-chevron-left"></i></Left>
                    <Right onClick={()=>this.nextSlid()}><i className="fa fa-chevron-right"></i></Right>
                        <SectionSlider className="section">
                        {this.state.newproducts.map((item,index) =>{
                            return(
                                <Product key={index} className="product">
                                    <CardImgCont>
                                        <ProductImg src={item.image} alt="mobile imge" />
                                    </CardImgCont>
                                    <ProductCardBody>
                                        <Title>{item.title}</Title>
                                        <CardText>
                                            {item.price} EGP
                                        </CardText>
                                        <Btns>
                                            <BtnAdd onMouseDown={()=>this.changeId(item.id)} onClick={this.AddProdectToCart}>Add To Cart</BtnAdd>
                                            <BtnShow to={"/NewProd/"+item.id} className="btn-primary">Show</BtnShow>   
                                        </Btns>
                                        
                                    </ProductCardBody>
                                </Product>
                            )
                        })
                        }
                        </SectionSlider>
                    </ProductSlider>
                    <ProductSlider>
                    <Newest>Newest Mobile</Newest>
                    <Left onClick={()=>this.prevProdSlid()} ><i className="fa fa-chevron-left"></i></Left>
                    <Right onClick={()=>this.nextProdSlid()}><i className="fa fa-chevron-right"></i></Right>

                    <SectionSlider className="section all-product">
                        {this.state.products.map((item,index) =>{
                            return(
                                <Product key={index} className="product">
                                    <CardImgCont>
                                        <ProductImg src={item.image} alt="mobile imge" />
                                    </CardImgCont>
                                    <ProductCardBody>
                                        <Title>{item.name}</Title>
                                        <CardText>
                                            {item.price} EGP
                                        </CardText>
                                        <Btns>
                                            <BtnAdd  onMouseDown={()=>this.changeMobileId(item.id)} onClick={this.AddProdectToCart}>Add To Cart</BtnAdd>
                                            <BtnShow to={"/mobile/"+item.id} className="btn btn-primary">Show</BtnShow>
                                        </Btns>
                                    </ProductCardBody>
                                </Product>
                            )
                        })
                        }

                        
                    </SectionSlider>
                    </ProductSlider>
                </Slider>
            </Section>
        )
    }
}

export default connect(null,{addToCart})(Home) ;