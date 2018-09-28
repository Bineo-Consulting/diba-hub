import grails.plugins.metadata.GrailsPlugin
import org.grails.gsp.compiler.transform.LineNumber
import org.grails.gsp.GroovyPage
import org.grails.web.taglib.*
import org.grails.taglib.GrailsTagException
import org.springframework.web.util.*
import grails.util.GrailsUtil

class gsp_ala_hub_layoutsala_gsp extends GroovyPage {
public String getGroovyPageFileName() { "/WEB-INF/grails-app/views/layouts/ala.gsp" }
public Object run() {
Writer out = getOut()
Writer expressionOut = getExpressionOut()
registerSitemeshPreprocessMode()
createTagBody(1, {->
printHtmlPart(0)
createTagBody(2, {->
printHtmlPart(1)
invokeTag('captureMeta','sitemesh',3,['gsp_sm_xmlClosingForEmptyTag':("/"),'http-equiv':("Content-Type"),'content':("text/html; charset=UTF-8")],-1)
printHtmlPart(1)
invokeTag('addApplicationMetaTags','alatag',4,[:],-1)
printHtmlPart(1)
invokeTag('captureMeta','sitemesh',5,['gsp_sm_xmlClosingForEmptyTag':(""),'name':("viewport"),'content':("width=device-width, initial-scale=1.0")],-1)
printHtmlPart(1)
invokeTag('captureMeta','sitemesh',6,['gsp_sm_xmlClosingForEmptyTag':(""),'name':("breadcrumb"),'content':(pageProperty(name:'meta.breadcrumb'))],-1)
printHtmlPart(1)
invokeTag('captureMeta','sitemesh',7,['gsp_sm_xmlClosingForEmptyTag':(""),'name':("breadcrumbs"),'content':(pageProperty(name:'meta.breadcrumbs'))],-1)
printHtmlPart(1)
invokeTag('captureMeta','sitemesh',8,['gsp_sm_xmlClosingForEmptyTag':(""),'name':("breadcrumbParent"),'content':(pageProperty(name:'meta.breadcrumbParent'))],-1)
printHtmlPart(1)
invokeTag('captureMeta','sitemesh',9,['gsp_sm_xmlClosingForEmptyTag':(""),'name':("hideBreadcrumb"),'content':(pageProperty(name:'meta.hideBreadcrumb'))],-1)
printHtmlPart(2)
createTagBody(3, {->
createTagBody(4, {->
invokeTag('layoutTitle','g',11,[:],-1)
})
invokeTag('captureTitle','sitemesh',11,[:],4)
})
invokeTag('wrapTitleTag','sitemesh',11,[:],3)
printHtmlPart(1)
invokeTag('render','g',12,['template':("/layouts/global"),'plugin':("biocache-hubs")],-1)
printHtmlPart(2)
invokeTag('stylesheet','asset',14,['src':("alaBs.css")],-1)
printHtmlPart(1)
invokeTag('javascript','asset',15,['src':("alaBs.js")],-1)
printHtmlPart(2)
invokeTag('layoutHead','g',17,[:],-1)
printHtmlPart(2)
if(true && (pageProperty(name:'meta.fluidLayout'))) {
invokeTag('set','g',19,['var':("fluidLayout"),'value':(pageProperty(name:'meta.fluidLayout').toBoolean())],-1)
}
else {
invokeTag('set','g',20,['var':("fluidLayout"),'value':(grailsApplication.config.skin.fluidLayout?.toBoolean())],-1)
}
printHtmlPart(0)
})
invokeTag('captureHead','sitemesh',21,[:],2)
printHtmlPart(0)
createTagBody(2, {->
printHtmlPart(3)
expressionOut.print(fluidLayout?'container-fluid':'container')
printHtmlPart(4)
invokeTag('layoutBody','g',24,[:],-1)
printHtmlPart(5)
expressionOut.print(fluidLayout?'container-fluid':'container')
printHtmlPart(6)
})
invokeTag('captureBody','sitemesh',29,['class':("${pageProperty(name:'body.class')?:'nav-datasets'} ${fluidLayout?'fluid':''}"),'id':(pageProperty(name:'body.id')),'onload':(pageProperty(name:'body.onload'))],2)
printHtmlPart(0)
})
invokeTag('applyLayout','g',29,['name':("main")],1)
printHtmlPart(0)
}
public static final Map JSP_TAGS = new HashMap()
protected void init() {
	this.jspTags = JSP_TAGS
}
public static final String CONTENT_TYPE = 'text/html;charset=UTF-8'
public static final long LAST_MODIFIED = 1538057344000L
public static final String EXPRESSION_CODEC = 'html'
public static final String STATIC_CODEC = 'none'
public static final String OUT_CODEC = 'html'
public static final String TAGLIB_CODEC = 'none'
}
