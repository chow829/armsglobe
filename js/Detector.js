/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */

Detector = {

	canvas: !! window.CanvasRenderingContext2D,
	webgl: ( function () { try { return !! window.WebGLRenderingContext && !! document.createElement( 'canvas' ).getContext( 'experimental-webgl' ); } catch( e ) { return false; } } )(),
	workers: !! window.Worker,
	fileapi: window.File && window.FileReader && window.FileList && window.Blob,

	getWebGLErrorMessage: function () {

		var element = document.createElement( 'div' );
		element.id = 'webgl-error-message';
		element.style.fontFamily = 'arial';
		element.style.fontSize = '13px';
		element.style.fontWeight = 'normal';
		element.style.textAlign = 'center';
		element.style.background = '#222222';
		element.style.color = '#ffffff';
		element.style.padding = '1.5em';
		element.style.width = '100%';
		element.style.margin = '5em auto 0';
		element.style.zIndex = '500000';
		element.style.position = 'absolute';
		element.style.pointerEvents = 'all';

		if ( ! this.webgl ) {

			element.innerHTML = [
				'Your browser does not support WebGL. <a href="http://www.google.com/chrome/" style="color:#ffffff">Download Chrome</a><br>',
				'or <a href="http://www.khronos.org/webgl/wiki_1_15/index.php/Getting_a_WebGL_Implementation" style="color:#ffffff">click here</a> to learn more.'
			].join( '\n' );

		}

		return element;

	},

	addGetWebGLMessage: function ( parameters ) {

		var parent, id, element;

		parameters = parameters || {};

		parent = parameters.parent !== undefined ? parameters.parent : document.body;
		id = parameters.id !== undefined ? parameters.id : 'oldie';

		element = Detector.getWebGLErrorMessage();
		element.id = id;

		parent.appendChild( element );

	}

};
