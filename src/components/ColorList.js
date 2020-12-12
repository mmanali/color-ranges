import React from 'react'
import { GridList, GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function ColorList({list}) {
  const {enqueueSnackbar} = useSnackbar();

  const handleCopyOnClick = (color) => {
    enqueueSnackbar('Copied to clipboard!', {action: (<CheckCircleOutlineIcon/>),});
    navigator.clipboard.writeText(color);
  }

  return (
    <GridList spacing={0} className={'color-list'} cols={5}>
        {list && list.map((color, index) => (
        <GridListTile className={'list-tile list-tile__color'} style={{ backgroundColor: `#${color.hex}`, padding: 0 }} key={index}>
            <GridListTileBar
            className={'list-bar list-bar__color-info'}
            title={`${color.weight}% #${color.hex}`}
            actionIcon={
              <IconButton className={'list-button list-button__icon-copy'} aria-label={`#${color.hex}`}
                  onClick={() => handleCopyOnClick(`#${color.hex}`)}
              >
                <FileCopyOutlinedIcon 
                    className={'list-icon list-icon__copy'}
                />
              </IconButton>
            }
            />
        </GridListTile>
        ))}
    </GridList>
  )
}

export default ColorList;