import Carousel from 'react-material-ui-carousel'
import { makeStyles,Box } from '@material-ui/core'
import { bannerData } from '../../data';


const useStyle = makeStyles(theme => ({
    container: {
        padding:10,
        backgroundColor: "#F2F2F2"
    },
    image: {
        width: '100%',
        height: 280,
        [theme.breakpoints.down('sm')]: {
            objectFit: 'cover',
            height: 180
        }
    }
}))

const Carousell = () => {
    const classes = useStyle();
    return (
        <Box className={classes.container}>
        <Carousel 
            autoPlay={true} 
            animation="slide" 
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            StylesProvider
            navButtonsProps={{ 
                style: {
                    color: '#494949',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 0,
                    margin: 0,
                    width: 50,
                }
            }}
        >
            {
                bannerData.map(image => (
                    <img src={image} className={classes.image} alt="aj"/>
                ))
            }
        </Carousel>
        </Box>
    )
}

export default Carousell;
