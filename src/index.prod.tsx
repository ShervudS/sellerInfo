import ReactDOM from 'react-dom';
import { App } from '_components/App';

// == register service-worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            // .then((registration) => {
            //     console.log('SW registered: ', registration);
            // })
            .catch((registrationError) => {
                console.error('SW registration failed: ', registrationError);
            });
    });
}

ReactDOM.render(<App />, document.getElementById('app'));
