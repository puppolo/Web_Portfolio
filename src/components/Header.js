import './Header.css'

const Header = (props) => {
    
    const myInfo = props.myInfo

    return (
        <div class='main'>
            <div class='row'>
                <div class='col'>
                    {/*Need text above the picture later*/}
                    {/*<h2 class='topText'>{myInfo[0].name}</h2>*/}
                    <img class='namePic' src="/name.png" />
                    <div class='text-left'><img class="icon" src="/mailbox.png" alt="" /> {myInfo[0].email}</div>
                    <div class='text-left'><img class="icon" src="/phone.png" alt="" /> {myInfo[0].number}</div>
                    <h3 class='h3-left'><img class="icon" src="/marker.png" alt="" /> {myInfo[0].location}</h3>
                </div>
                <div class='col-pic'>
                    <img class='profilePicture' src="/profilePic.jpg" alt="" />
                    <div class='text-right'>{myInfo[0].position}</div>
                </div>
                <div class='col'>
                    <h2 class='topText'>{myInfo[0].quote}</h2>
                    <div class='text-right'>{myInfo[0].info}</div>
                </div>
            </div>
        </div>
    )
}

export default Header;