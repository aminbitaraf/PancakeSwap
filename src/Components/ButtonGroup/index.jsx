import * as React from 'react';
import {styled} from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabUnstyled, {tabUnstyledClasses} from '@mui/base/TabUnstyled';
import {theme} from "../../Style/theme";


const Tab = styled(TabUnstyled)((props) => ({
    fontFamily: theme.typography.fontFamily,
    borderRadius: 16,
    backgroundColor: 'transparent',
    padding: '4px 16px',
    fontWeight: '600',
    letterSpacing: "0.03em",
    fontSize: 16,
    color: props.type === 'primary' ? theme.palette.secondary.main : theme.palette.primary.main,
    border: 'none',
    "&:hover": {
        opacity: .75
    },

    [`&.${tabUnstyledClasses.selected}`]: {
        backgroundColor: props.type === 'primary' ? theme.palette.secondary.main : theme.palette.primary.main,
        color: theme.palette.secondary.contrastText,
    },
}));

const TabsList = styled(TabsListUnstyled)((props) => ({
    backgroundColor: props.type === 'primary' ? theme.palette.background.input : theme.palette.background.hover,
    borderRadius: 16,
    border: `1px solid ${theme.palette.secondary.main}10`,
}));

export const ButtonGroup = (props) => {
    return (
        <TabsUnstyled defaultValue={0}>
            <TabsList {...props}>
                {
                    props.buttons.map((item, key) =>
                        <Tab {...props} key={key}>{item}</Tab>
                    )
                }
            </TabsList>
        </TabsUnstyled>
    );
}


export default ButtonGroup;