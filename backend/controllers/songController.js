import { Song } from "../models/songModel.js";


export const likeSong = async(req, res) => {
    try {
        const {name} = req.params;
        const {userId} = req.body;

        if(!userId){
            return res.status(400).json({
                message:"UserID is not Accepted"
            })
        }

        const song = await Song.findOne({name})
        if(!song){
            return res.status(404).json({ message: 'Song not found' });
        }

        if(song.likes.includes(userId)){
            song.likes = song.likes.filter((user) => user.toString() !== userId);
            await song.save();
            return res.status(200).json({ message: 'Song unliked' });
        } else {
            song.likes.push(userId);
            await song.save();
            return res.status(200).json({ message: 'Song liked' });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server Error' });
    }
}
