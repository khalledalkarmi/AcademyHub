import { createStyles, Container, Title, Text, Button } from '@mantine/core';
import Pusher from "pusher-js"

const useStyles = createStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: '#11284b',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage:
            'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://unsplash.com/photos/SYTO3xs06fU/download?ixid=MnwxMjA3fDB8MXxjb2xsZWN0aW9ufDR8NTg2NzcyODZ8fHx8fDJ8fDE2Njk2NjIyNjk&force=true&w=2400)',
        paddingTop: theme.spacing.xl * 3,
        paddingBottom: theme.spacing.xl * 3,
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',

        [theme.fn.smallerThan('md')]: {
            flexDirection: 'column',
        },
    },

    image: {
        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    content: {
        paddingTop: theme.spacing.xl * 2,
        paddingBottom: theme.spacing.xl * 2,
        marginRight: theme.spacing.xl * 3,

        [theme.fn.smallerThan('md')]: {
            marginRight: 0,
        },
    },

    title: {
        color: theme.white,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        lineHeight: 1.05,
        maxWidth: 500,
        fontSize: 48,

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            fontSize: 34,
            lineHeight: 1.15,
        },
    },

    description: {
        color: theme.white,
        opacity: 0.75,
        maxWidth: 500,

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
        },
    },

    control: {
        paddingLeft: 50,
        paddingRight: 50,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 22,

        [theme.fn.smallerThan('md')]: {
            width: '100%',
        },
    },
}));

export function Header() {
    const { classes } = useStyles();
    var pusher = new Pusher('a55e00eca2f25da1d516', {
        cluster: 'ap2'
      });
    
      var channel = pusher.subscribe('chat');
      channel.bind('my-event', function (data) {
        console.log(data);
      });
    return (
        <div className={classes.root}>
            <Container size="lg">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{ from: 'pink', to: 'yellow' }}
                            >
                                Academy Hub
                            </Text>{' '}
                            lorem lorem lorem
                        </Title>

                        <Text className={classes.description} mt={30}>
                            lorem lorem lorem       lorem lorem lorem       lorem lorem lorem       lorem lorem lorem
                        </Text>

                        <Button
                            variant="gradient"
                            gradient={{ from: 'pink', to: 'yellow' }}
                            size="xl"
                            className="bg-orange-500"
                            mt={40}
                        >
                            Get started
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}