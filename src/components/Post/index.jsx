import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import Divider from '@material-ui/core/Divider';
import './../../App.css';
import RecentPostItem from './../RecentPosts/RecentPostItem';
import Comment from './Comment';



const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(4, 0),
        flexGrow: 1,
    },
    title: {
        color: "black",
        fontWeight: "600"
    },
    commentRoot:{
        margin: theme.spacing(1,0)
    }
}))

function Post(props) {

    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={1}>
            <Grid item lg={8} xs={12} spacing={2}>
                <Grid item lg={12}>
                    <Typography className={classes.title} variant="h4">Thị trường nghề business analyst hiện nay</Typography>
                    <div className={classes.content} dangerouslySetInnerHTML={{
                        __html: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
                                        <p><img class="img-fluid" src="https://preview.colorlib.com/theme/andrea/images/ximage_1.jpg.pagespeed.ic.bP9m1ezc08.webp" alt="" data-pagespeed-url-hash="3951709250" /></p>
                                        <p>Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!</p>
                                        <h2 class="mb-3 mt-5">#2. Creative WordPress Themes</h2>
                                        <p>Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.</p>
                                        <p><img class="img-fluid" src="https://preview.colorlib.com/theme/andrea/images/ximage_2.jpg.pagespeed.ic.Bj2SSShAni.webp" alt="" data-pagespeed-url-hash="4246209171" /></p>
                                        <p>Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.</p>
                                        <p>Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.</p>
                                        <p>Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!</p>
                                        <p>Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?</p>`}}>
                    </div>
                </Grid>
                <Divider light />
                <Grid item lg={12} container justify="flex-end" alignItems="center" style={{ marginTop: 10, marginBottom: 10 }}>
                     <Typography style={{ marginRight: 10 }} variant="h6">Share </Typography>
                    <IconButton aria-label="delete" className={classes.socialIcon} style={{ color: "blue" }}>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton aria-label="delete" className={classes.socialIcon} style={{ color: "#1C9CEA" }}>
                        <TwitterIcon />
                    </IconButton>
                    <IconButton aria-label="delete" className={classes.socialIcon} style={{ color: "black" }}>
                        <GitHubIcon />
                    </IconButton>
                    <IconButton aria-label="delete" className={classes.socialIcon} style={{ color: "#EF4A5A" }}>
                        <InstagramIcon />
                    </IconButton>
                </Grid>
                <Divider light />
                <Grid item lg={12} className={classes.commentRoot}>
                    <Typography>Comments (16)</Typography>
                </Grid>
                <Comment />
                <Comment />
                <Comment />
            </Grid>
            <Grid item lg={4}>
                <Grid container spacing={2}>
                    <Grid item lg={12} xs={12} md={12}>
                        <RecentPostItem />
                    </Grid>
                    <Grid item lg={12} xs={12} md={12}>
                        <RecentPostItem />
                    </Grid>
                    <Grid item lg={12} xs={12} md={12}>
                        <RecentPostItem />
                    </Grid>
                    <Grid item lg={12} xs={12} md={12}>
                        <RecentPostItem />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Post;



