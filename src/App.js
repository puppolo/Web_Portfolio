import Header from './components/Header'

function App() {

  const myInfo = [{
    name: 'Nontanat Nutsati',
    email: 'nontanat.nutsati@gmail.com',
    number: '(+66)88 908 5615',
    location: 'Bangkok, Thailand',
    location_acro: 'BKK, TH',
    position: 'Software Engineer',
    quote: 'Lorem ipsum dolor sit amet, consectetur.',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  }]

  return (
    <div className="App">
      <Header myInfo={myInfo} />
    </div>
  );
}

export default App;
