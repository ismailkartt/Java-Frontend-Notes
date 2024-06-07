import "./profile-card.scss";
import Statistics from "./statistics/statistics";

const ProfileCard = (props) => {
    const imgSrc = require(`../../assets/img/${props.src || 'profile-card.jpg'}`)
    const profileBackgroundStyle = {
        backgroundImage: `url(${imgSrc})`
    }
    // console.log(props.statistics);

    return (
        <div className="profile-card-container">
            <div className="header" style={profileBackgroundStyle}></div>
            <div className="content">
                <div className="avatar" style={profileBackgroundStyle}></div>
                <h3>{props.name}</h3>
                <h5>{props.location}</h5>
                <div className="stats">
                    {
                        props.statistics?.map((statistic) => (
                            <Statistics
                                key={statistic.title}
                                {...statistic}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfileCard