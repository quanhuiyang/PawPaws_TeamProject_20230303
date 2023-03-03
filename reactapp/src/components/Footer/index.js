import { Box, Grid, Typography, List, ListItemText } from '@mui/material'
import { FooterTitle } from '../../styles/Footer/index'
import { shades } from '../../styles/theme'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import { Stack } from '@mui/material'

export default function Footer() {
  return (
    <Box
      sx={{
        background: shades.secondary[500],
        color: shades.beige_light[100],
        p: { xs: 4, md: 5 },
        pt: 5,
        pb: 5,
        fontSize: { xs: '12px', md: '14px' },
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {/*1.追蹤我們 */}
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">社群帳號</FooterTitle>
          <Box
            sx={{
              mt: 4,
              color: shades.beige_light[100],
            }}
          >
            <FacebookIcon sx={{ mr: 1 }} />
            <TwitterIcon sx={{ mr: 1 }} />
            <InstagramIcon />
          </Box>
        </Grid>
        {/*2.關於我們 連結 */}
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">關於我們</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                品牌故事
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                最新消息
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                網站導覽
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        {/*3.購物須知 連結 */}
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">購物須知</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                會員優惠活動
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                購物結帳問題
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                運費問題
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                退換貨說明
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        {/*4.聯絡我們 連結 */}
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">聯絡我們</FooterTitle>
          <Stack>
            <List>
              <ListItemText>
                <Typography lineHeight={2} variant="caption2">
                  LINE客服 | abc123 <br></br>
                  業務合作 | abc123@pet.come<br></br>
                  客服時間｜ Mon-Fri 10:00-18:00
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography lineHeight={2} variant="caption2">
                  <br></br>
                </Typography>
              </ListItemText>
            </List>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}
