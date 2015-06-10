
// WE USED THIS BELOW CODE
// ISMAN SUBARKAH (FOUNDER & CEO RASHCODE SOLUTION DEVELOPMENT <RASHCODE>, 
// TECHNICAL EVANGELIST)
  

$(function() {
	// alert('1 Hello World !');
	
	var indexdiv =  $('#index');
	
	var article = Backbone.Model.extend({
		defaults: { 
			siteurl: '',
			url: '',
			title : '',
			desc : '',
			tag : '',
			link : ''
		}
	});
	
	var articles = Backbone.Collection.extend({
		model: article
	});
	
	function escapeHTML(text) {
		return text.replace(/\&/g,'&amp;').replace(/\</g,'&lt;').replace(/\>/g,'&gt;');
	}
	
	function replaceWithArray(value, from, to) {
		if(from.length === to.length) {
			from.forEach(function(changedStr, index){
				value = value.replace(changedStr, to[index]);
			});
		}
		
		return value;
	}
	
	var articleView = Backbone.View.extend({
		tagName: "article",
		template: $("#article-template").html(),		
		
		render: function() {
			
			if ( this.model.attributes.link === true ) {
				this.template = replaceWithArray(this.template, ['##_class_link_post_##', '##_link_post_##', '##_link_desc_##'], ['class="link-post"', '<a href="<%= link %>" target="_blank" title="<%= title %>"><i class="fa fa-link"></i></a>', '']);
				
				// this.template = this.template.replace('##_class_link_post_##', 'class="link-post"');
				// this.template = this.template.replace('##_link_post_##', '<a href="<%= link %>" target="_blank" title="<%= title %>"><i class="fa fa-link"></i></a>');	
				// this.template = this.template.replace('##_link_desc_##', '');
			} else {
				this.template = replaceWithArray(this.template, ['##_class_link_post_##', '##_link_post_##', '##_link_desc_##'], ['', '', '<p><%= desc %></p>']);
				
				// this.template = this.template.replace('##_class_link_post_##', '');
				// this.template = this.template.replace('##_link_post_##', '');
				// this.template = this.template.replace('##_link_desc_##', '<p><%= desc %></p>');
			}
			
			var tmpl = _.template(this.template);
			this.$el.html(tmpl(this.model.toJSON()));
			
			return this;
		}
		
	});	
	
	var anArticle = new article({
			siteurl: escapeHTML('http://isman.com'),
			url: '/about/life',
			title : 'isman',
			desc : 'isman is successful man',
			tag : 'life',
			link : ''
	});
	
	var articleView = new articleView({ model: anArticle });
	console.log(articleView.render().el.innerHTML);
	
	$.get('/data/posts.json', function(data) {
		
		var response = [data];
		
		$(window).on('hashchange', function(){
			//goto(window.location.hash);
		}).trigger('hashchange');
		
		indexdiv.find('input').on('input', function(){
			var value = this.value.trim();
			
			if (value.length) {
				
				// console.log(value);
				
				window.location.hash = 'search=' + value.trim();
				
				$.each(data, function(i, v) { console.log(v.items.title) });
			}
		});
		
		// console.log(response);
	});
	
	// alert(article);
	
});

function replaceWithArray(value, from, to) {
		if(from.length === to.length) {
			from.forEach(function(changedStr, index){
				value = value.replace(changedStr, to[index]);
			});
		}
		
		return value;
}
// (function($) { 
	// // alert('2 Hello World !');
	
	
	// var article = Backbone.Model.extend({
		// defaults: { 
			// siteurl: '',
			// url: '',
			// title : '',
			// desc : '',
			// tag : '',
			// link : ''
		// }
	// });
	
	// var articles = Backbone.Collection.extend({
		// model: article
	// });
	
	// var articleView = Backbone.View.extend({
		// tagName: "article",
		// template: $("#article-template").html(),		
		
		// render: function() {
			
			// if ( this.model.attributes.link === true ) {
				// this.template = this.template.replace('##_class_link_post_##', 'class="link-post"');
				
				// this.template = this.template.replace('##_link_post_##', '<a href="<%= link %>" target="_blank" title="<%= title %>"><i class="fa fa-link"></i></a>');
				
				// this.template = this.template.replace('##_link_desc_##', '');
			// } else {
				// this.template = this.template.replace('##_class_link_post_##', '');
				// this.template = this.template.replace('##_link_post_##', '');
				// this.template = this.template.replace('##_link_desc_##', '<p><%= desc %></p>');
			// }
			
			// var tmpl = _.template(this.template);
			// this.$el.html(tmpl(this.model.toJSON()));
			
			// return this;
		// }
		
	// });	
	
	// var anArticle = new article({
			// siteurl: 'http://isman.com',
			// url: '/about/life',
			// title : 'isman',
			// desc : 'isman is successful man',
			// tag : 'life',
			// link : ''});
	// var articleView = new articleView({ model: anArticle });
	// console.log(articleView.render().el.innerHTML);
	
	// // alert(article);
	
// })(jQuery);

// alert(article);
// (function($){
	
	// var url = (document.URL.charAt(4) === 's' ? 'https://' : 'http://') + document.URL.split('/')[2];
	// var request;
	// var allPost;
	// var collectionOfArticle = [];
	// var storageName = 'ismansubarkah.com-posts';
	// var json = {
        // "people": {
            // "person": [{
                // "name": "Peter",
                // "age": 43,
                // "sex": "male"},
            // {
                // "name": "Zara",
                // "age": 65,
                // "sex": "female"}]
        // }
    // };
	
    // // $.each( json.people.person, function(i, v) {
        // // if (v.name.search(new RegExp(/r/i)) != -1) {
            // // alert(v.age);
            // // return;
        // // }
    // // };
	
	// var test = function() {
		// var peter = '/r/i';
		// $.each( json.people.person, function(i, v) {
			// if ( v.name.search(new RegExp(peter)) != -1 ) {
				// alert(v.age);
				// return;
			// }
		// });
	// }
	
	// var GetAllPosts = function() {
		// if (request) request.abort();
		
		// request = $.ajax({
			// url : url + '/data/posts.json',
			// type : 'GET',
			// dataType : 'json'
		// });
		
		// request.done(function( msg ) {
			// if (window.localStorage && !window.localStorage.getItem(storageName)) {
				// window.localStorage.setItem(storageName, JSON.stringify(msg));
			// }
			// console.log(msg);
		// });
		
		// request.fail(function( jqXHR, textStatus ) {
			// console.log(textStatus);
		// });
	// }
	
	// if ( window.localStorage && !window.localStorage.getItem(storageName) ) {
		// GetAllPosts();
	// }
	
	// var article = Backbone.Model.extend({
		// defaults: { 
			// siteurl: '',
			// url: '',
			// title : '',
			// desc : '',
			// tag : '',
			// link : ''
		// }
	// });
	
	// var articles = Backbone.Collection.extend({
		// model: article
	// });
	
	// var articleView = Backbone.View.extend({
		// tagName: "article",
		// template: $("#article-template").html(),		
		
		// render: function() {
			
			// if ( this.model.attributes.link === true ) {
				// this.template = this.template.replace('##_class_link_post_##', 'class="link-post"');
				
				// this.template = this.template.replace('##_link_post_##', '<a href="<%= link %>" target="_blank" title="<%= title %>"><i class="fa fa-link"></i></a>');
				
				// this.template = this.template.replace('##_link_desc_##', '');
			// } else {
				// this.template = this.template.replace('##_class_link_post_##', '');
				// this.template = this.template.replace('##_link_post_##', '');
				// this.template = this.template.replace('##_link_desc_##', '<p><%= desc %></p>');
			// }
			
			// var tmpl = _.template(this.template);
			// this.$el.html(tmpl(this.model.toJSON()));
			
			// return this;
		// }
	// });	
	
	// var articlesView = Backbone.View.extend({
		// el: $('#index'),
		// initialize: function() {
			// this.collection = new articles(collectionOfArticle);
			// if (this.collection.length > 0) {
				// this.render();
			// }
			// this.collection.on('add', this.addArticle, this);
			// this.collection.on('remove', this.removeArticle, this);
		// },
		// events: {
			// 'keyup #search-field' : 'searchpost'
		// },
		
		// searchpost: function( e ) {
			// if (null !== allPost && 'object' === typeof allPost) {
				// allPost = JSON.parse(window.localStorage.getItem(storageName));
			// }
			// // var titleSearched = $('#search-field').val();
			// // $.each(allPost, function( i, v ){
				// // if ( -1 !== v.title.search(titleSearched) ) {
					
				// // }
			// // });
			// this.render($('#search-field').val());
		// },
		
		// render: function( a ) {
			// var _obj = _dataArticle = new article({ title: a });
			// var _articleView = new articleView({ model: _dataArticle });
			
			// //$('#index').append(_articleView.render().el);
			// //$('#articles-data')
			// console.log('index appended');
		// }
	// });
	
	// var articlesView_ = new articlesView('');
	
	// test();
	
	// //var anArticle = new article();
	// //var articleView = new articleView({ model: anArticle });
	// //console.log(articleView.render());
	
// })(jQuery);

// // $(function() {
	// // console.log('a');
// // });

// // console.log('aaaaa');