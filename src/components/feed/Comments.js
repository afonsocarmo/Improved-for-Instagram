import Heart from './Heart'
import PropTypes from 'prop-types'
import { Component, h } from 'preact'

const Comments = props => (
	<div class="ige_post-comments mb-4">
		{props.data?.edges?.map(v => {
			const username = v.node.owner.username
			return (
				<div class="d-block">
					<a class="" title={username} href={'/' + username + '/'}>
						{username}
					</a>
					<span class="pl-2 ige_text">{v.node.text}</span>
					<button type="button" class="ige_button ml-auto as-center">
						<Heart width={12} height={12} fill="#8e8e8e" active={v.node.viewer_has_liked} />
					</button>
				</div>
			)
		})}
	</div>
)

Comments.propTypes = {}

export default Comments
