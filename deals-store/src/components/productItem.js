import React from 'react'

function ProductItem(props) {
    return (
        <li className="rc-product-list-item">
            <picture className="rc-prod-item-img-wrapper">
                <a href={props.product.href} className="rc-prod-item-img-link">
                    <img className="rc-prod-item-img" src={props.product.thumbnailUrl} alt={props.product.title} />
                </a>
            </picture>

            <div className="rc-desc-wrapper">
                <p className="rc-prod-item-desc">
                    <a href={props.product.url} className="rc-prod-item-link">
                        {props.product.title}
                    </a>
                </p>
                <span className="rc-prod-price">$USD 199.00</span>

                <div className="rc-cta-wrapper">
                    <button className="rc-icn rc-wishlist-icn">
                        <span className="rc-icn-alt">Add to wishlist</span>
                    </button>
                    
                    <button className="rc-icn rc-cart-icn">
                        <span className="rc-icn-alt">Add to cart</span>
                    </button>
                </div>
            </div>
        </li>
    )
}

export default ProductItem




