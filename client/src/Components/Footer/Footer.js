import React from 'react'
import { useNavigate} from 'react-router-dom';
import { AppBar,Box, Toolbar,styled,Fab,IconButton} from '@mui/material'
import { MenuIcon,SearchIcon,MoreIcon,AddIcon } from '@mui/icons-material'

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  });



const Footer = () => {
    const history = useNavigate()
    const onClickSearch = () =>{
        history('/form')
        console.log("clicked");
    }
  return (
    <AppBar position="fixed" style={{ background: '#2E3B55' }} sx={{top: 'auto', bottom: 0 }}>
    <Toolbar>
      <IconButton color="inherit" aria-label="open drawer">
        <MenuIcon />
      </IconButton>
      <StyledFab color="secondary" aria-label="add">
        <AddIcon sx={{}}/>
      </StyledFab>
      <Box sx={{ flexGrow: 1 }} />
      <IconButton color="inherit" >
        <SearchIcon onClick={onClickSearch()} />
      </IconButton>
      <IconButton color="inherit">
        <MoreIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
  )
}

export default Footer