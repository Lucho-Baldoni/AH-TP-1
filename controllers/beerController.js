import beerModel from '../models/beerModel.js';

export const getBeers = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const beers = await beerModel.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();
        res.json(beers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getBeerById = async (req, res) => {
    try {
        const beer = await beerModel.findById(req.params.id);
        if (!beer) return res.status(404).json({ message: 'Cerveza no encontrada' });
        res.json(beer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createBeer = async (req, res) => {
    const beer = new beerModel(req.body);
    try {
        const savedBeer = await beer.save();
        res.status(201).json(savedBeer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateBeer = async (req, res) => {
    try {
        const updatedBeer = await beerModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBeer) return res.status(404).json({ message: 'Cerveza no encontrada' });
        res.json(updatedBeer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteBeerById = async (req, res) => {
    try {
        const deletedBeer = await beerModel.findByIdAndDelete(req.params.id);
        if (!deletedBeer) return res.status(404).json({ message: 'Cerveza no encontrada' });
        res.json({ message: 'Cerveza eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
