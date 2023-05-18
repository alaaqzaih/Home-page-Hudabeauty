
function ProductDetailsModal({ product }) {

    return (
        <div className='product-details-modal'>
            <div className="details-img-wrapper ms-5 me-5">
                <img
                    src={product.productImage}
                    alt={product.title}
                    className="details-img" />
            </div>
            <div className="details-rate-wrapper mx-3 d-flex align-items-center">
                <div className="details-rate">
                </div>
                <div className='mx-2 pt-1'>|</div>
            </div>
            <div className="details-price text-success mx-3 fs-3 fw-bold">
            </div>
            <div className="details-desc mx-3">
                {product.description}
            </div>
        </div>
    )
}

export default ProductDetailsModal;