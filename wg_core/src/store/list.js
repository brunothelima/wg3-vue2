/* eslint-disable */
import Vue from 'vue';
import WgApi from 'wg_core/api';

const state = {
  status: '',
  items: [],
  filters: {},
  page: 1,
  limit: 9,
  total: 0,
};

const getters = {
  isLoading: state => state.status === 'loading',
  isLastPage: state => state.items.length >= state.total && state.page > 0,
  itemsNotFound: state => state.total === 0,
};

const actions = {
  paginate({ commit, dispatch, state }) {
    return new Promise((resolve, reject) => {
      commit('setStatus', 'loading');
      WgApi.get(window.location.href, {
        page: state.page,
        limit: state.limit,
        ...state.filters,
      }).then(resp => {
        commit('setPage', state.page + 1);
        commit('setItems', state.items.concat(resp.items));
        commit('setTotal', resp.total || state.total);
        commit('setStatus', 'success');
        resolve(resp);
      })
        .catch(err => {
          dispatch('reset');
          commit('setStatus', 'error');
          reject(err);
        });
    });
  },
  reset({ commit, state }) {
    commit('setPage', 0);
    commit('setTotal', null);
    commit('setItems', []);
    commit('setStatus', '');
  },
};

const mutations = {
  setItems(state, payload) {
    state.items = payload;
  },
  setPage(state, payload) {
    state.page = payload;
  },
  setFilters(state, payload) {
    Vue.set(state, 'filters', payload);
  },
  setLimit(state, payload) {
    state.limit = payload;
  },
  setTotal(state, payload) {
    state.total = payload;
  },
  setStatus(payload) {
    state.status = payload;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}