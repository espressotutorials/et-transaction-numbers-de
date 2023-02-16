import React from 'react'

const Newsletter = () => {

    function handleSubmit(e) {
        e.preventDefault();
        const status = document.getElementById('status');
        const mail = document.getElementById('mail');
        const privacy = document.getElementById('privacy');
        const url = `https://api.espresso-tutorials.com/api/newsletter/subscribe?locale=de`;

        if (status) {
            status.innerText = '';
            status.classList.remove('text-red-500');
            status.classList.remove('mt-2');
        }

        if (!mail || !mail?.value || !privacy) {
            status.innerText = 'Fehler: Bitte überprüfen Sie ihre Angaben und versuchen Sie es erneut!';
            status.classList.add('text-red-500');
            status.classList.add('mt-2');
            return;
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ email: mail.value }),
        }).then((response) => {
            if (response.ok) {
                return response;
            }
            return Promise.reject(response);
        }).then(() => {
            status.innerText = 'Vielen Dank, Sie haben sich erfolgreich zum Newsletter angemeldet.';
            status.classList.add('text-green-500');
            status.classList.add('mt-2');
            mail.value = '';
            setTimeout(() => {
                status.innerText = '';
                status.classList.remove('text-green-500');
                status.classList.remove('mt-2');
            }, 5000);
        }).catch((error) => {
            console.log(error);
            status.innerText = 'Fehler: Bitte überprüfen Sie ihre Angaben und versuchen Sie es erneut!';
            status.classList.add('text-red-500');
            status.classList.add('mt-2');
            setTimeout(() => {
                status.innerText = '';
                status.classList.remove('text-red-500');
                status.classList.remove('mt-2');
            }, 5000);
        });
    }

    return (
        <div className="mt-16 bg-blue-200 rounded-lg md:rounded-xl shadow-2xl p-4 md:p-8">
            <div className="w-full py-8 px-4 sm:px-6 lg:px-8 flex flex-row flex-wrap items-center">
                <div className="w-full">
                    <h2 className="font-extrabold text-gray-900 leading-none text-lg md:text-2xl">Newsletter abonnieren</h2>
                    <p className="mt-3 max-w-3xl text-base text-gray-650 leading-tight">Melden Sie sich jetzt zu unserem Newsletter an und verpassen Sie nie wieder Neuerungen.</p>
                </div>
                <div className="w-full mt-4">
                    <form onSubmit={handleSubmit}>
                        <label className="sr-only" htmlFor="email">E-Mail Adresse</label>
                        <div className="w-full flex flex-row flex-wrap">
                            <input id="mail"
                                   className="w-full ms:w-auto sm:flex-1 px-5 py-3 border border-gray-500 shadow-sm placeholder-gray-650 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                                   type="text" placeholder="E-Mail Adresse"/>
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 w-48">
                                <button type="submit" className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Abonnieren
                                </button>
                            </div>
                        </div>
                        <div className="w-full flex items-center mt-2">
                            <input id="privacy" name="privacy"
                                   type="checkbox"
                                   className="pointer-events-none text-blue-500 border-gray-600 focus:border-indigo-300 focus:ring-0 focus:ring-transparent outline-none focus:outline-none rounded" />
                            <label htmlFor="privacy"
                                   className="ml-2 block text-sm text-gray-650 cursor-pointer">
                                <a
                                    href="https://www.espresso-tutorials.de/datenschutz"
                                    target="_blank"
                                    rel="noopener"
                                    className="font-medium underline">Datenschutz
                                </a>
                                <span className="ml-1">akzeptieren</span><sup className="text-red-500">*</sup></label>
                        </div>
                    </form>
                    <div id="status" className="w-full text-sm font-semibold"></div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
