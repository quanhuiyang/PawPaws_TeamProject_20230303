import { useMediaQuery, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import {
  BannerContainer,
  BannerContent,
  BannerTitle,
  BannerDescription,
  BannerImage,
} from '../../../styles/Banner'

export default function Banner() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
      <BannerContainer>
        <BannerImage src="images/Amy_img/banner/laura-chouette-YpoczNsZYts-unsplash.jpg" />
        <BannerContent>
          <Typography variant="h6" sx={{ letterSpacing: 1.5 }}>
            寵 物 好 食 在
          </Typography>
          <BannerTitle variant="h5" align="center">
            Pets Shop
          </BannerTitle>
          <BannerDescription variant="subtitle" align="center">
            獸醫專門推薦，符合毛孩成長需求的營養配方
          </BannerDescription>
        </BannerContent>
      </BannerContainer>
    </>
  )
}
