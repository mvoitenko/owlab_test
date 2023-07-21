import {Paper, Typography} from "@mui/material";

function NewsCard({newsItem}) {
    return (
        <Paper
            elevation={3}
            sx={{mt: '30px', p: '10px'}}
        >
            <Typography gutterBottom variant="h5" component="div">
                {newsItem?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {newsItem?.body}
            </Typography>
        </Paper>
    );
}
export default NewsCard;