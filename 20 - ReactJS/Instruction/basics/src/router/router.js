import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home/home';
import UserLayout from '../layouts/user-layout';
import Jsx1 from '../components/02-jsx/01-jsx';
import Jsx2 from '../components/02-jsx/02-jsx';
import Jsx3 from '../components/02-jsx/03-jsx';
import Jsx4 from '../components/02-jsx/04-jsx';
import InlineStyling from '../components/03-styles/01-inline-styling';
import InternalStyling from '../components/03-styles/02-internal-styling';
import ExternalStyling from '../components/03-styles/03-external-styling';
import ModuleStyling from '../components/03-styles/04-module-styling';
import Sass from '../components/03-styles/05-sass';
import DijitalSaatUygulamasi1 from '../components/04-dijital-saat-uygulamasi1/04-dijital-saat-uygulamasi1';
import DijitalSaatUygulamasi3 from '../components/18-dijital-saat-uygulamasi3/dijital-saat-uygulamasi3';
import DijitalSaatUygulamasi2 from '../components/06-dijital-saat-uygulamasi2/06-dijital-saat-uygulamasi2';
import Greetings from '../components/05-props/01-greetings';
import Children from '../components/05-props/04-children';
import Image from '../components/07-images/01-image';
import ImageGallery from '../components/07-images/02-image-gallery';
import ProfileCard from '../components/08-profile-card/profile-card';
import BootstrapKlasikYontem from '../components/09-bootstrap/01-bootstrap-klasik-yontem';
import BootstrapComponents from '../components/09-bootstrap/02-bootstrap-components';
import BootstrapButton from '../components/09-bootstrap/03-bootstrap-button';
import ReactIcons from '../components/10-icons/01-react-icons';
import MaterialIcons from '../components/10-icons/02-material-icons';
import Events from '../components/11-events/events';
import ProductShop from '../components/12-product-shop/product-shop';
import State from '../components/13-usestate/state';
import Counter from '../components/14-counter/counter';
import Birthday from '../components/15-birthday/birthday';
import UseEffect from '../components/16-useeffect/useeffect';
import CounterTitle from '../components/17-counter-title/counter-title';
import UseRef from '../components/19-useref/useref';
import ClassTypeComponent from '../components/20-component-types/01-class-type-component';
import FunctionTypeComponent from '../components/20-component-types/02-function-type-component';
import Fetch1 from '../components/21-fetch/01-fetch';
import Fetch2 from '../components/21-fetch/02-fetch';
import Countries from '../components/22-axios/countries';
import ParentComponent from '../components/23-lifting-state-up/parent-component';
import Form1 from '../components/24-forms/01-form';
import Form2 from '../components/24-forms/02-form';
import Form3 from '../components/24-forms/03-form';
import Form4 from '../components/24-forms/04-form';
import Form5 from '../components/24-forms/05-form';
import FormikYup1 from '../components/25-formik-yup/01-formik-yup';
import FormikYup2 from '../components/25-formik-yup/02-formik-yup';
import X from "../components/01-my-house/01-my-house";
import { Armutlar, Muzlar } from '../components/01-my-house/01-my-house';
import ReactRouterDom from '../components/26-react-router/users';
import RouterParams from '../components/26-react-router/user-details';
import Users from '../components/26-react-router/users';
import UserDetails from '../components/26-react-router/user-details';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'x',
                element: <X />
            },
            {
                path: 'armutlar',
                element: <Armutlar />
            },
            {
                path: 'muzlar',
                element: <Muzlar />
            },
            {
                path: 'jsx',
                children: [
                    {
                        index: true,
                        element: <Jsx1 />
                    },
                    {
                        path: '1',
                        element: <Jsx1 />
                    },
                    {
                        path: '2',
                        element: <Jsx2 />
                    },
                    {
                        path: '3',
                        element: <Jsx3 />
                    },
                    {
                        path: '4',
                        element: <Jsx4 />
                    }
                ]
            },
            {
                path: 'styles',
                children: [
                    {
                        index: true,
                        element: <InlineStyling />
                    },
                    {
                        path: 'inline-styling',
                        element: <InlineStyling />
                    },
                    {
                        path: 'internal-styling',
                        element: <InternalStyling />
                    },
                    {
                        path: 'external-styling',
                        element: <ExternalStyling />
                    },
                    {
                        path: 'module-styling',
                        element: <ModuleStyling />
                    },
                    {
                        path: 'sass',
                        element: <Sass />
                    }
                ]
            },
            {
                path: 'dijital-saat-uygulamasi',
                children: [
                    {
                        index: true,
                        element: <DijitalSaatUygulamasi1 />
                    },
                    {
                        path: '1',
                        element: <DijitalSaatUygulamasi1 />
                    },
                    {
                        path: '2',
                        element: <DijitalSaatUygulamasi2 color="white" backgroundColor="red" />
                    },
                    {
                        path: '3',
                        element: <DijitalSaatUygulamasi3 color="white" backgroundColor="purple" />
                    },
                ]
            },
            {
                path: 'greetings',
                element: <Greetings />
            },
            {
                path: 'children',
                element: <Children>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus nesciunt eos facere et repellendus quasi ipsam ab tempore earum porro saepe sapiente nemo asperiores, cupiditate nobis officiis modi, quas minus!
                </Children>
            },
            {
                path: 'image',
                children: [
                    {
                        index: true,
                        element: <Image />
                    },
                    {
                        path: 'gallery',
                        element: <ImageGallery />
                    }
                ]
            },
            {
                path: 'profile-card',
                element: <ProfileCard
                    src="profile.jpg"
                    name="Zisan"
                    location="Istanbul, Turkey"
                    statistics={
                        [
                            {
                                stat: 8,
                                title: "Shot"
                            },
                            {
                                stat: 1000,
                                title: "Followers"
                            },
                            {
                                stat: 50,
                                title: "Following"
                            }
                        ]
                    }
                />
            },
            {
                path: 'bootstrap',
                children: [
                    {
                        index: true,
                        element: <BootstrapKlasikYontem />
                    },
                    {
                        path: 'klasik-yontem',
                        element: <BootstrapKlasikYontem />
                    },
                    {
                        path: 'react-bootstrap',
                        element: <BootstrapComponents />
                    },
                    {
                        path: 'button',
                        element: <BootstrapButton variant="outline-primary" disabled />

                    }
                ]
            },
            {
                path: 'icons',
                children: [
                    {
                        index: true,
                        element: <ReactIcons />
                    },
                    {
                        path: 'react-icons',
                        element: <ReactIcons />
                    },
                    {
                        path: 'material-icons',
                        element: <MaterialIcons />
                    }
                ]
            },
            {
                path: 'events',
                element: <Events />
            },
            {
                path: 'product-shop',
                element: <ProductShop />
            },
            {
                path: 'state',
                element: <State />
            },
            {
                path: 'counter',
                element: <Counter />
            },
            {
                path: 'birthday',
                element: <Birthday />
            },
            {
                path: 'useeffect',
                element: <UseEffect />
            },
            {
                path: 'counter-title',
                element: <CounterTitle />
            },
            {
                path: 'useref',
                element: <UseRef />
            },
            {
                path: 'component-types',
                children: [
                    {
                        index: true,
                        element: <ClassTypeComponent />
                    },
                    {
                        path: 'class-type-component',
                        element: <ClassTypeComponent />
                    },
                    {
                        path: 'function-type-component',
                        element: <FunctionTypeComponent />
                    }
                ]
            },
            {
                path: 'fetch',
                children: [
                    {
                        index: true,
                        element: <Fetch1 />
                    },
                    {
                        path: '1',
                        element: <Fetch1 />
                    },
                    {
                        path: '2',
                        element: <Fetch2 />
                    }
                ]
            },
            {
                path: 'countries',
                element: <Countries />
            },
            {
                path: 'parent-component',
                element: <ParentComponent />
            },
            {
                path: 'form',
                children: [
                    {
                        index: true,
                        element: <Form1 />
                    },
                    {
                        path: '1',
                        element: <Form1 />
                    },
                    {
                        path: '2',
                        element: <Form2 />
                    },
                    {
                        path: '3',
                        element: <Form3 />
                    },
                    {
                        path: '4',
                        element: <Form4 />
                    },
                    {
                        path: '5',
                        children: [
                            {
                                index: true,
                                element: <Form5 />
                            },
                            {
                                path: ':formId',
                                element: <Form5 />
                            }
                        ]
                    },
                ]
            },
            {
                path: 'formik-yup',
                children: [
                    {
                        index: true,
                        element: <FormikYup1 />
                    },
                    {
                        path: '1',
                        element: <FormikYup1 />
                    },
                    {
                        path: '2',
                        element: <FormikYup2 />
                    }
                ]
            },
            {
                path: 'users',
                children: [
                    {
                        index: true,
                        element: <Users />
                    },
                    {
                        path: ':userId',
                        element: <UserDetails />
                    },
                ]
            }
        ]
    },
    {
        path: '*',
        element: <h1>404 Not Found</h1>
    }
]);