import {
  Product,
  ProductActionsWrapper,
  ProductFavButton,
  ProductImage,
  ProductActionButton,
  ProductAddToCart,
} from '../../../styles/Product/index'
import ProductTag from './ProductTag'
import { Stack } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import FitScreenIcon from '@mui/icons-material/FitScreen'
import  { useState, useEffect } from 'react'
import PetsIcon from '@mui/icons-material/Pets'
import { shades } from '../../../styles/theme'
import useDialogModal from '../../hooks/useDialogModal'
import ProductDetail from '../ProductDetail/index'
import { useCart } from '../../hooks/useCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Swal from 'sweetalert2'

export default function SingleProductDesktop({product, matches}){
	const [isFav, setIsFav] = useState(false); // 是否按下愛心按鈕的狀態
	useEffect(() => {
    const storedFav = localStorage.getItem(`product-${product.id}-fav`);
    if (storedFav !== null) {
      setIsFav(JSON.parse(storedFav));
    }
  }, [product.id]);
	
  const handleFavButtonClick = () => {
    const newFav = !isFav;
    setIsFav(newFav);
    localStorage.setItem(`product-${product.id}-fav`, JSON.stringify(newFav));
    if (!newFav) {
      localStorage.removeItem(`product-${product.id}-fav`);
    }
  };
		// const handleFavButtonClick = () => {
  //   setIsFav(!isFav);
  // };

	const[ showOptions, setShowOptions ] = useState(false);

	const [ProductDetailDialog, showProductDetailDialog, closeProductDetailDialog]
	= useDialogModal(ProductDetail);

  
	//const { addToCart, addToCartText } = useCart(product);

	const { addItem, isInCart, removeItem } = useCart();

  const addToCart = () =>{
    return isInCart(product.id)? removeItem(product.id): addItem({...product, quantity: 1})
  };

  const addToCartText = isInCart(product.id)? "移除" : "加購物車";
  
	const handleMouseEnter = () => {
		setShowOptions(true);
	};

	const handleMouseLeave = ()=>{
		setShowOptions(false);
	}



return(
<>
<Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductFavButton isFav={isFav} sx={{ bgcolor: "#fff9f2" }} onClick={handleFavButtonClick}>
          {isFav ? <FavoriteIcon sx={{ color: '#ff816d' }} /> : <FavoriteBorderIcon />}
        </ProductFavButton>
        {showOptions && (
          <ProductAddToCart
            onClick={addToCart}
            show={showOptions}
            variant="contained"
            startIcon={<PetsIcon sx={{ color: shades.black[500] }} />}
          >
		{/* 加入購物車 */}
		{addToCartText}
	</ProductAddToCart>
	)}
	<ProductActionsWrapper show={showOptions}>
		<Stack direction="column" >
			<ProductActionButton>
				<ShareIcon color ="blue"/>
			</ProductActionButton>
			<ProductActionButton onClick ={ () => showProductDetailDialog() }>
				<FitScreenIcon color ="blue"/>
			</ProductActionButton>
		</Stack>
	</ProductActionsWrapper>
</Product>
<ProductTag product={product} matches={matches} />
<ProductDetailDialog product={product} />
</>
);
}

