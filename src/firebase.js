import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

import { storage } from './firebase.config'

import {
	getDatabase,
	ref as refference,
	set,
	child,
	get,
	push,
	update,
} from 'firebase/database'

const uploader = (files, getImageURL) => {
	files.forEach((file, index) => {
		const imagesRef = ref(storage, 'images')
		const imageRef = ref(imagesRef, file.name)
		const uploadTask = uploadBytesResumable(imageRef, file)

		uploadTask.on(
			'state_changed',
			snapshot => {
				const progress =
					((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0) +
					'%'
				const bar = document.querySelectorAll('#progress-bar')
				bar[index].textContent = progress
				bar[index].style.background = '#81c784'
				bar[index].style.width = progress
			},
			error => {
				console.log(error)
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
					getImageURL(downloadURL)
				})
			},
		)
	})
}

const writeDataToDB = async goodsItem => {
	const { title, description, price, src } = goodsItem
	const database = getDatabase()
	await set(refference(database, 'goods/' + title), {
		title: title,
		description: description,
		price: price,
		src: src,
		date: new Date().toLocaleDateString('ua-UA', {
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
		}),
	})
}
//TODO: update not duplicated
const updateGoodsInfo = (item, oldItem) => {
	const db = getDatabase()
	const { title, description, price, src, date } = item
	console.log(item, oldItem)
	const postData = {
		title: title,
		description: description,
		price: price,
		src: src,
		date: date,
	}

	const updates = {}
	updates['/goods/' + oldItem.title] = postData

	return update(refference(db), updates)
}

const removeGoodsItem = title => {
	const db = getDatabase()
	const postData = null
	const updates = {}
	updates['/goods/' + title] = postData

	return update(refference(db), updates)
}

const getDataFromDB = cb => {
	const dbRef = refference(getDatabase())
	get(child(dbRef, `goods/`))
		.then(snapshot => {
			if (snapshot.exists()) {
				cb(snapshot.val())
			} else {
				console.log('No data available')
			}
		})
		.catch(error => {
			console.error(error)
		})
}

export {
	uploader,
	writeDataToDB,
	getDataFromDB,
	updateGoodsInfo,
	removeGoodsItem,
}
