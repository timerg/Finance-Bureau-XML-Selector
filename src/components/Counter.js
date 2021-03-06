// @flow

import React from 'react'
import { Map } from 'immutable'

import type { TrInfo } from 'components/App'

type CounterDisplayerType = {
	fileName: string,
	counter: {
		all: number,
		mergeAll: number,
		display: number,
		mergeDisplay: number
	},
	trInfos: Map<string, TrInfo>
}


const CounterDisplayer = ({ fileName, counter, trInfos }: CounterDisplayerType) => {
	let checkedCounterAll = 0
	let checkedCounterDisplayed = 0
	trInfos.map(( trInfo, key) => {
		if(trInfo.get('checked')) {
			checkedCounterAll++
			if(trInfo.get('toShow')) {
				checkedCounterDisplayed++
			}
		}
	})
	return (
		<div className='counter'>
			<span id='file-name'> {fileName} </span>
			<span>&nbsp;&nbsp;</span>
			<span id='row-counter'> 共 {counter.display.toString()} / {counter.all.toString()} </span>
			件，含併案
			<span id='merge-file-counter'> {counter.mergeDisplay.toString()} / {counter.mergeAll.toString()} </span>
			件 ，已勾選
			<span id='check-counter'> {checkedCounterDisplayed} / {checkedCounterAll} </span>
			件
		</div>
	)
}

function countDeleteList(deleteList) {
	let counter = 0
	Object.keys(deleteList).map(k => {
		if(deleteList[k] == true) {
			counter++
		}
	})
	return counter
}

export default CounterDisplayer